import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Button,
  Divider
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

const footerLinks = {
  company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
  product: ['Features', 'Pricing', 'Integrations', 'Enterprise', 'Security'],
  resources: ['Documentation', 'Help Center', 'API', 'Community', 'Webinars'],
  legal: ['Terms of Service', 'Privacy Policy', 'GDPR', 'Cookie Policy']
};

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'grey.900', color: 'grey.300', py: 6 }}>
      <Container>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand & Social */}
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 3, fontWeight: 600 }}>
              WorkSpace
            </Typography>
            <Typography sx={{ color: 'grey.500', lineHeight: 1.6, mb: 3 }}>
              Our workspace management system helps teams organize tasks, collaborate effectively,
              and boost productivity with intelligent tools and analytics.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <Button
                  key={i}
                  sx={{
                    minWidth: 35,
                    height: 35,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'grey.100',
                    '&:hover': { backgroundColor: 'primary.main' }
                  }}
                >
                  <Icon fontSize="small" />
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={6} md={2} key={title}>
              <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 3, fontWeight: 600 }}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </Typography>
              <List dense sx={{ p: 0 }}>
                {links.map((link, index) => (
                  <ListItem key={index} disableGutters sx={{ mb: 1 }}>
                    <Button
                      href="#"
                      sx={{
                        color: 'grey.500',
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        p: 0,
                        '&:hover': { color: 'warning.main' }
                      }}
                    >
                      {link}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ backgroundColor: 'grey.800', my: 4 }} />

        <Typography sx={{ textAlign: 'center', color: 'grey.600', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} WorkSpace Management System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
