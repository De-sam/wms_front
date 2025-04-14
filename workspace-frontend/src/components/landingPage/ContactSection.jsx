import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Button
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

// Get the base URL from your .env file
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ContactSection = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : 'background.default'
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h2" sx={{ fontSize: '2rem', mb: 2 }}>
                Get In Touch
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
                Have questions or ready to transform your workspace? Our team is here to help you get started.
              </Typography>

              {/* Optional: You can display the base URL here for debugging purposes */}
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                API Base URL: {baseUrl}
              </Typography>

              <List>
                {[
                  {
                    icon: <EmailIcon />,
                    label: 'contact@workspace-system.com'
                  },
                  {
                    icon: <PhoneIcon />,
                    label: '+1 (555) 123-4567'
                  },
                  {
                    icon: <LocationIcon />,
                    label: (
                      <>
                        123 Workspace Avenue, Suite 100<br />
                        San Francisco, CA 94107
                      </>
                    )
                  }
                ].map((item, i) => (
                  <ListItem key={i} disableGutters sx={{ mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {item.icon}
                      </Box>
                    </ListItemIcon>
                    <Typography>{item.label}</Typography>
                  </ListItem>
                ))}
              </List>

              <Button
                href="mailto:contact@workspace-system.com"
                variant="contained"
                color="primary"
                sx={{ mt: 4 }}
              >
                Send Email
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
