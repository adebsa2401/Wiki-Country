import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD = 'wiki-country/cities/LOAD';

const minPopulationObject = {};

export const loadCities = createAsyncThunk(
  LOAD,
  async (iso2) => {
    const minPopulation = minPopulationObject[iso2] || 0;

    const response = await fetch(`${process.env.REACT_APP_CITIES_API_URL}?country=${iso2}&min_population=${minPopulation}&limit=30`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.REACT_APP_API_KEY,
      },
    });

    const data = (await response.json()).map((city) => ({
      name: city.name,
      population: city.population,
      isCapital: city.is_capital,
    }));

    if (data.length > 0) {
      minPopulationObject[iso2] = Math.max(...data.map((city) => city.population));
    }

    return { [iso2]: data };
  },
);

const initialState = {};

export default (state = initialState, action) => {
  let nextState = { ...state };
  let country = null;

  switch (action.type) {
    case `${LOAD}/fulfilled`:
      [country] = Object.keys(action.payload);
      nextState = [...(state[country] || []), ...action.payload[country]];
      nextState = [...new Map(nextState.map((item) => [item.name, item])).values()];
      nextState.sort((a, b) => b.population - a.population);
      return { ...state, [country]: nextState };
    default:
      return nextState;
  }
};
