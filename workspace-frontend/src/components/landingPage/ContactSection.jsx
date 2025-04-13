import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Button
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Box component="section" id="contact" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Grid container spacing={4}>
          {/* Left - Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontSize: '2rem', mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
              Have questions or ready to transform your workspace? Our team is here to help you get started.
            </Typography>

            <List>
              <ListItem disableGutters sx={{ mb: 2 }}>
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
                    <EmailIcon />
                  </Box>
                </ListItemIcon>
                <Typography>contact@workspace-system.com</Typography>
              </ListItem>

              <ListItem disableGutters sx={{ mb: 2 }}>
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
                    <PhoneIcon />
                  </Box>
                </ListItemIcon>
                <Typography>+1 (555) 123-4567</Typography>
              </ListItem>

              <ListItem disableGutters sx={{ mb: 2 }}>
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
                    <LocationIcon />
                  </Box>
                </ListItemIcon>
                <Typography>
                  123 Workspace Avenue, Suite 100<br />
                  San Francisco, CA 94107
                </Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Right - Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'background.paper',
                p: 4,
                borderRadius: '12px',
                boxShadow: 2
              }}
            >
              <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 3, fontWeight: 600 }}>
                Send Us a Message
              </Typography>
              <Box component="form">
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" placeholder="Your full name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email Address" placeholder="Your email address" type="email" variant="outlined" />
                  </Grid>
                </Grid>
                <TextField fullWidth label="Subject" placeholder="Message subject" sx={{ mb: 2 }} variant="outlined" />
                <TextField
                  fullWidth
                  label="Your Message"
                  placeholder="Write your message here..."
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                  variant="outlined"
                />
                <Button type="submit" variant="contained" fullWidth color="primary" size="large">
                  Submit Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
