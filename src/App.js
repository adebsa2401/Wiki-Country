import React from 'react';
import { Provider } from 'react-redux';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import store from './redux/configureStore';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="countries" element={<HomePage />} />
        <Route path="countries/:id/cities" />
      </Route>,
    ),
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
