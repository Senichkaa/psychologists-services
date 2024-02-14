import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));
const PsychologistsPage = lazy(() => import('../pages/PsychologistsPage'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
