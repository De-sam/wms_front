import React from 'react';
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Button
} from '@mui/material';

const WorkspaceForm = ({
  formData,
  editMode,
  onChange,
  onSubmit,
  onCancel
}) => {
  return (
    <Box component="form" onSubmit={onSubmit} mt={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth required>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              value={formData.type}
              onChange={onChange}
              label="Type"
            >
              <MenuItem value="Desk">Desk</MenuItem>
              <MenuItem value="Room">Room</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Capacity"
            name="capacity"
            type="number"
            value={formData.capacity}
            onChange={onChange}
            inputProps={{ min: 1 }}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Amenities"
            name="amenities"
            value={formData.amenities}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={formData.available}
                onChange={onChange}
                name="available"
              />
            }
            label="Available"
          />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            {editMode ? 'Update Workspace' : 'Add Workspace'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkspaceForm;
