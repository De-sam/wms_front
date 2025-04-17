// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const { shortcode } = useParams();

  console.log("🔐 ProtectedRoute Check:");
  console.log("✅ Token:", token);
  console.log("✅ Shortcode:", shortcode);

  if (!token || !shortcode) {
    console.warn("❌ Redirecting to login due to missing token or shortcode");
    return <Navigate to={`/${shortcode || ''}/login`} replace />;
  }

  return children;
};

export default ProtectedRoute;
