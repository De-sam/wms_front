import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { shortcode } = useParams();

  // Retrieve token and saved shortcode from localStorage
  const token = localStorage.getItem('token');
  const storedShortcode = localStorage.getItem('shortcode');

  console.log('🔐 ProtectedRoute Check:');
  console.log('✅ Token:', token);
  console.log('✅ URL Shortcode:', shortcode);
  console.log('✅ Stored Shortcode:', storedShortcode);

  // Check if token exists and shortcode in URL matches the stored one
  if (!token || !shortcode || shortcode !== storedShortcode) {
    console.warn('❌ Redirecting to login due to missing or mismatched token/shortcode');
    return <Navigate to={`/${shortcode || ''}/login`} replace />;
  }

  return children;
};

export default ProtectedRoute;
