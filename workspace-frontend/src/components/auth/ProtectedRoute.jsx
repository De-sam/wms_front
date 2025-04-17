// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // or whatever you use for auth
  const { shortcode } = useParams();

  if (!token) {
    return <Navigate to={`/${shortcode}/login`} replace />;
  }

  return children;
};

export default ProtectedRoute;
