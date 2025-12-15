import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function ProtectedRoute({ children }) {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/signup" replace />; // redirige a registro si no hay usuario
  }

  return children;
}

export default ProtectedRoute;
