import { configureStore } from '@reduxjs/toolkit';
import countries from './countries/countries';
import cities from './cities/cities';
import itemsFilter from './filter/filter';

export default configureStore({
  reducer: {
    countries,
    cities,
    itemsFilter,
  },
});
