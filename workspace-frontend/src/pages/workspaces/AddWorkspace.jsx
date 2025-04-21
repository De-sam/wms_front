import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Alert, CircularProgress } from '@mui/material';
import WorkspaceForm from './components/WorkspaceForm'; // adjust if your path is different

const initialFormState = {
  name: '',
  type: '',
  capacity: '',
  description: '',
  amenities: '',
  available: true
};

const AddWorkspace = () => {
  const { orgCode } = useParams(); // expect route like /:orgCode/dashboard/workspaces/add
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ type: '', message: '' });

    try {
      const payload = {
        section: 1, // 🔁 Replace with dynamic section selection if needed
        name: formData.name,
        type: formData.type,
        capacity: parseInt(formData.capacity),
        description: formData.description,
        amenities: formData.amenities
          .split(',')
          .map((a) => a.trim())
          .filter(Boolean),
        is_available: formData.available
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/${orgCode}/api/workspaces/`,
        payload
      );

      setAlert({ type: 'success', message: `Workspace "${res.data.name}" added.` });
      setFormData(initialFormState); // reset form
    } catch (err) {
      console.error('Submission error:', err);
      setAlert({
        type: 'error',
        message: err.response?.data?.detail || 'Something went wrong.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setAlert({ type: '', message: '' });
  };

  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 6 }}>
      {alert.message && (
        <Alert severity={alert.type} sx={{ mb: 3 }}>
          {alert.message}
        </Alert>
      )}

      <WorkspaceForm
        formData={formData}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        editMode={false}
        loading={loading}
      />

      {loading && (
        <Container sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Container>
      )}
    </Container>
  );
};

export default AddWorkspace;
