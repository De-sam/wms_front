// src/pages/workspaces/AddWorkspace.jsx

import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import WorkspaceForm from './components/WorkspaceForm';

const initialFormState = {
  id: null,
  name: '',
  type: '',
  capacity: '',
  description: '',
  amenities: '',
  available: true,
};

const AddWorkspace = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Workspace Submitted:', formData);
    // 🔁 You can POST this to the backend later
    setFormData(initialFormState);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
  };

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Add New Workspace
        </Typography>
        <WorkspaceForm
          formData={formData}
          editMode={false}
          onChange={handleFormChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Paper>
    </Container>
  );
};

export default AddWorkspace;
