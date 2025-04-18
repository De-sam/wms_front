import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : 'background.default'
      }}
    >
      {/* Contact Info Container */}
      <Container maxWidth="lg">
            <Box
        sx={{
          maxWidth: 500,
          mx: { xs: 'auto', md: 0 },
          ml: { md: -18 } // 👈 shifts it to the left on medium screens and up
        }}
      >
          <Typography variant="h2" sx={{ fontSize: '2rem', mb: 2 }}>
            Get In Touch
          </Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
            Have questions or ready to transform your workspace? Our team is here to help you get started.
          </Typography>

          <List>
            {[
              { icon: <EmailIcon />, label: 'contact@workspace-system.com' },
              { icon: <PhoneIcon />, label: '+1 (555) 123-4567' },
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
        </Box>
      </Container>

      {/* Avatar positioned far left and very large */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: 0, md: 300 }, // EVEN FURTHER left
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: { xs: 220, md: 400 }, // MASSIVE size now
            height: { xs: 220, md: 400 },
            backgroundColor: 'grey.300',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <PersonIcon sx={{ fontSize: { xs: 120, md: 220 }, color: 'grey.600' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
