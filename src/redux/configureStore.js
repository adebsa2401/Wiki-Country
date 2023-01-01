import { configureStore } from '@reduxjs/toolkit';
import countries from './countries/countries';
import countriesFilter from './countries/filter';
import cities from './cities/cities';
import citiesFilter from './cities/filter';

export default configureStore({
  reducer: {
    countries,
    countriesFilter,
    cities,
    citiesFilter,
  },
});
