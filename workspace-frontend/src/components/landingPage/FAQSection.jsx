import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is a workspace in your system?',
    answer:
      'A workspace is a digital environment where teams can manage tasks, collaborate, and track progress specific to their department or project.'
  },
  {
    question: 'Can I invite multiple team members?',
    answer:
      'Yes, you can invite as many members as your plan allows. Each member can be assigned roles and permissions.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Absolutely! You can try the system for free for 14 days — no credit card required.'
  },
  {
    question: 'Can I customize my workspace layout?',
    answer:
      'Yes, you can fully customize your dashboard, themes, and widgets to suit your team’s workflow.'
  }
];

const FAQSection = () => {
  return (
    <Box
      component="section"
      id="faq"
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              width: 80,
              height: 4,
              backgroundColor: 'warning.main',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </Box>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              boxShadow: 1,
              borderRadius: 2,
              overflow: 'hidden',
              '&:before': { display: 'none' }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
