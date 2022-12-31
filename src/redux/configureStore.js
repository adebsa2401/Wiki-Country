import { configureStore } from '@reduxjs/toolkit';
import countries from './countries/countries';

export default configureStore({
  reducer: {
    countries,
  },
});
