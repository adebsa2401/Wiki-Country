import React from 'react';
import { Provider } from 'react-redux';
import {
  createRoutesFromElements, Route, RouterProvider, Navigate, createHashRouter,
} from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import store from './redux/configureStore';
import './styles/App.css';

export default function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="countries" element={<HomePage />} />
        <Route path="countries/:iso2/cities" element={<DetailsPage />} />
        <Route path="" element={<Navigate to="countries" replace />} />
      </Route>,
    ),
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
