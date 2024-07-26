import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const LoggedRouter = () => {
  const isLoggedIn = true; // Defina a lógica de autenticação conforme necessário

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default LoggedRouter;
