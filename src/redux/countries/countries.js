import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD = 'wiki-country/countries/LOAD';

export const loadCountries = () => createAsyncThunk(
  LOAD,
  async () => {
    const response = await fetch(`${process.env.REACT_APP_COUNTRIES_API_URL}?min_population=1000000`, {
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

    return data;
  },
);

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOAD}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};
