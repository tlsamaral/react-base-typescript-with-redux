import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoggedRouter from './LoggedRouter';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';

export default function RoutesApplication() {
  return (
    <Routes>
      <Route element={<LoggedRouter />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
