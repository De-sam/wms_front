import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';

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
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: 'Desk A1', type: 'Desk', capacity: 1, description: 'Window view desk', amenities: 'Monitor, Keyboard, Mouse', available: true },
    { id: 2, name: 'Meeting Room 101', type: 'Room', capacity: 8, description: 'Large conference room', amenities: 'Projector, Whiteboard', available: true },
    { id: 3, name: 'Desk B3', type: 'Desk', capacity: 1, description: 'Corner desk', amenities: 'Dual monitors', available: false },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [searchText, setSearchText] = useState('');

  const handleAddNew = () => {
    setEditMode(false);
    setCurrentWorkspace(null);
    setFormData(initialFormState);
  };

  const handleEdit = (workspace) => {
    setEditMode(true);
    setCurrentWorkspace(workspace);
    setFormData(workspace);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this workspace?')) {
      setWorkspaces(prev => prev.filter(ws => ws.id !== id));
    }
  };

  const handleToggleAvailability = (id) => {
    setWorkspaces(prev =>
      prev.map(ws => ws.id === id ? { ...ws, available: !ws.available } : ws)
    );
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setWorkspaces(prev =>
        prev.map(ws => ws.id === currentWorkspace.id ? { ...formData } : ws)
      );
    } else {
      const newId = Math.max(0, ...workspaces.map(ws => ws.id)) + 1;
      setWorkspaces(prev => [...prev, { ...formData, id: newId }]);
    }
    setFormData(initialFormState);
    setEditMode(false);
    setCurrentWorkspace(null);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setEditMode(false);
    setCurrentWorkspace(null);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredWorkspaces = workspaces.filter(ws =>
    ws.name.toLowerCase().includes(searchText.toLowerCase()) ||
    ws.type.toLowerCase().includes(searchText.toLowerCase()) ||
    ws.description.toLowerCase().includes(searchText.toLowerCase()) ||
    ws.amenities.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 0.5, md: 3 }, pt: 0.5, pb: 3 }}>
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
        {(editMode || (formData !== initialFormState && currentWorkspace === null)) && (
          <WorkspaceForm
            formData={formData}
            editMode={editMode}
            onChange={handleFormChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}
        <WorkspaceTable
          workspaces={filteredWorkspaces}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggle={handleToggleAvailability}
        />
      </Paper>
    </Container>
  );
};

export default AllWorkspaces;
