import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD = 'wiki-country/cities/LOAD';

let minPopulation = 45000;
let maxPopulation = 100000000;

export const loadCities = createAsyncThunk(
  LOAD,
  async (country) => {
    const response = await fetch(`${process.env.REACT_APP_CITIES_API_URL}?country=${country}&min_population=${minPopulation}&max_population=${maxPopulation}&limit=30`, {
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

    maxPopulation = minPopulation;
    minPopulation -= 1000000;

    return { [country]: data };
  },
);

const initialState = {};

export default (state = initialState, action) => {
  let nextState = { ...state };
  const country = Object.keys(action.payload)[0];

  switch (action.type) {
    case `${LOAD}/fulfilled`:
      nextState = [...state[country], ...action.payload[country]];
      nextState = [...new Map(nextState.map((item) => [item.name, item])).values()];
      nextState.sort((a, b) => b.population - a.population);
      return { ...state, [country]: nextState };
    default:
      return nextState;
  }
};
