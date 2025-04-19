import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4
          }}
        >
          {/* Contact Info */}
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="h2" sx={{ fontSize: '2rem', mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
              Have questions or ready to transform your workspace? Our team is here to help you get started.
            </Typography>

            <List>
              {[
                {
                  icon: <EmailIcon />,
                  primary: (
                    <Link href="mailto:info@ispace.com" underline="hover" color="inherit">
                      info@ispace.com
                    </Link>
                  ),
                  secondary: 'Email us anytime'
                },
                {
                  icon: <PhoneIcon />,
                  primary: (
                    <Link href="tel:09033158802" underline="hover" color="inherit">
                      09033158802
                    </Link>
                  ),
                  secondary: 'Mon–Fri, 9AM–5PM'
                },
                {
                  icon: <LocationIcon />,
                  primary: '17 Alhaji Masha Street, Surulere, Lagos',
                  secondary: 'Nigeria'
                }
              ].map((item, index) => (
                <ListItem key={index} disableGutters sx={{ mb: 2, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 50 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      {item.icon}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 500, fontSize: '1rem' }}>
                        {item.primary}
                      </Typography>
                    }
                    secondary={
                      item.secondary && (
                        <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                          {item.secondary}
                        </Typography>
                      )
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Image with Zoom Animation */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1598256989800-9fd7ef2c82ce?auto=format&fit=crop&w=400&q=80"
            alt="Customer Support"
            sx={{
              width: { xs: 220, md: 400 },
              height: { xs: 220, md: 400 },
              objectFit: 'cover',
              borderRadius: 4,
              boxShadow: 3,
              flexShrink: 0,
              transition: 'transform 0.4s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
