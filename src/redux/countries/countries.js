import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD = 'wiki-country/countries/LOAD';

let minPopulation = 45000;
let maxPopulation = 100000000;

export const loadCountries = createAsyncThunk(
  LOAD,
  async () => {
    const response = await fetch(`${process.env.REACT_APP_COUNTRIES_API_URL}?min_population=${minPopulation}&max_population=${maxPopulation}&limit=30`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.REACT_APP_API_KEY,
      },
    });

    const data = (await response.json()).map((country) => ({
      name: country.name,
      population: parseInt(country.population, 10) * 1000,
      iso2: country.iso2,
      flag: `${process.env.REACT_APP_FLAGS_URL}/${country.iso2.toLowerCase()}`,
      map: `${process.env.REACT_APP_MAPS_URL}/${country.iso2.toLowerCase()}/128.png`,
    }));

    maxPopulation = minPopulation;
    minPopulation -= 10000;

    return data;
  },
);

const initialState = [];

export default (state = initialState, action) => {
  let nextState = [...state];

  switch (action.type) {
    case `${LOAD}/fulfilled`:
      nextState = [...state, ...action.payload];
      nextState = [...new Map(nextState.map((item) => [item.iso2, item])).values()];
      nextState.sort((a, b) => b.population - a.population);
      return nextState;
    default:
      return nextState;
  }
};
