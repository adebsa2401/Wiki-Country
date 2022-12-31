import { configureStore } from '@reduxjs/toolkit';
import countries from './countries/countries';
import countriesFilter from './countries/filter';

export default configureStore({
  reducer: {
    countries,
    countriesFilter,
  },
});
