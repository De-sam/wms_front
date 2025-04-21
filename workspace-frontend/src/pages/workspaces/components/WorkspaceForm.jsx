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
  Button,
  Paper,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const workspaceTypeOptions = [
  'Desk',
  'Room',
  'Office',
  'Hall',
  'Others'
];

const WorkspaceForm = ({
  formData,
  editMode,
  onChange,
  onSubmit,
  onCancel,
  loading = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 4 },
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        color="text.primary"
        gutterBottom
      >
        {editMode ? 'Update Workspace' : 'Add New Workspace'}
      </Typography>

      <Box component="form" onSubmit={onSubmit} mt={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Workspace Name"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              size="medium"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required size="medium">
              <InputLabel>Workspace Type</InputLabel>
              <Select
                name="type"
                value={formData.type}
                onChange={onChange}
                label="Workspace Type"
                sx={{ minWidth: isMobile ? '100%' : 300 }}
              >
                {workspaceTypeOptions.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Capacity"
              name="capacity"
              type="number"
              value={formData.capacity}
              onChange={onChange}
              inputProps={{ min: 1 }}
              required
              size="medium"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={onChange}
              multiline
              rows={3}
              size="medium"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amenities"
              name="amenities"
              value={formData.amenities}
              onChange={onChange}
              helperText="Separate with commas (e.g., wifi, AC, projector)"
              size="medium"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.available}
                  onChange={onChange}
                  name="available"
                />
              }
              label="Mark as Available"
              sx={{ pl: 1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              gap={2}
              justifyContent="flex-end"
              mt={2}
            >
              <Button
                variant="outlined"
                onClick={onCancel}
                fullWidth={isMobile}
                size="large"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={loading}
                fullWidth={isMobile}
                size="large"
              >
                {editMode ? 'Update Workspace' : 'Add Workspace'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default WorkspaceForm;
