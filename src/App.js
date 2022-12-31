import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

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
    <RouterProvider router={router} />
  );
}
