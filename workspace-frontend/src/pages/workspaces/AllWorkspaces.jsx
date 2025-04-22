import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Container,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import WorkspaceHeader from './components/WorkspaceHeader';
import WorkspaceSearch from './components/WorkspaceSearch';
import WorkspaceForm from './components/WorkspaceForm';
import WorkspaceTable from './components/WorkspaceTable';

const initialFormState = {
  id: null,
  name: '',
  type: '',
  capacity: '',
  description: '',
  amenities: '',
  available: true,
};

const AllWorkspaces = () => {
  const { shortcode } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_BASE = `${BASE_URL}/${shortcode}/api/workspaces`;

  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editMode, setEditMode] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const { data } = await axios.get(`${API_BASE}/`);
        setWorkspaces(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to load workspaces.');
      } finally {
        setLoading(false);
      }
    };
    fetchWorkspaces();
  }, [API_BASE]);

  const handleAddNew = () => {
    setEditMode(false);
    setCurrentWorkspace(null);
    setFormData(initialFormState);
    setIsModalOpen(true);
  };

  const handleEdit = (workspace) => {
    setEditMode(true);
    setCurrentWorkspace(workspace);
    setFormData(workspace);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this workspace?')) return;
    try {
      await axios.delete(`${API_BASE}/${id}/`);
      setWorkspaces(prev => prev.filter(ws => ws.id !== id));
    } catch (err) {
      console.error(err);
      alert('Delete failed.');
    }
  };

  const handleToggleAvailability = async (id) => {
    const ws = workspaces.find(w => w.id === id);
    if (!ws) return;
    try {
      const { data } = await axios.patch(`${API_BASE}/${id}/`, {
        available: !ws.available,
      });
      setWorkspaces(prev => prev.map(item => item.id === id ? data : item));
    } catch (err) {
      console.error(err);
      alert('Update failed.');
    }
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode && currentWorkspace) {
        const { data } = await axios.patch(
          `${API_BASE}/${currentWorkspace.id}/`,
          formData
        );
        setWorkspaces(prev =>
          prev.map(ws => (ws.id === currentWorkspace.id ? data : ws))
        );
      } else {
        const payload = { ...formData };
        delete payload.id;
        const { data } = await axios.post(`${API_BASE}/`, payload);
        setWorkspaces(prev => [...prev, data]);
      }

      setFormData(initialFormState);
      setEditMode(false);
      setCurrentWorkspace(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      alert('Save failed.');
    }
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setEditMode(false);
    setCurrentWorkspace(null);
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredWorkspaces = Array.isArray(workspaces)
    ? workspaces.filter(ws =>
        [ws.name, ws.type, ws.description, ws.amenities]
          .join(' ')
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    : [];

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }
  if (error) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, md: 3 }, pt: 0.5, pb: 3 }}>
      <Paper
        elevation={2}
        sx={{
          p: { xs: 2, sm: 3 },
          mt: 2,
          mb: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <WorkspaceHeader onAdd={handleAddNew} />
        <WorkspaceSearch value={searchText} onChange={handleSearch} />

        <WorkspaceTable
          workspaces={filteredWorkspaces}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggle={handleToggleAvailability}
        />
      </Paper>

      <Dialog
        open={isModalOpen}
        onClose={handleCancel}
        fullWidth
        fullScreen={fullScreen}
        maxWidth="md"
      >
        <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
          {editMode ? 'Edit Workspace' : 'Add New Workspace'}
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
          <WorkspaceForm
            formData={formData}
            editMode={editMode}
            onChange={handleFormChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AllWorkspaces;
