// src/pages/reports/components/PieChart.jsx
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Usage', value: 85 },
  { name: 'Remaining', value: 15 },
];

const PieChart = () => {
  const theme = useTheme();
  const COLORS = [
    theme.palette.primary.main,
    theme.palette.grey[300],
  ];

  return (
    <Box width="100%" height={250} position="relative">
      <ResponsiveContainer>
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius="70%"
            outerRadius="100%"
            stroke="none"
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
            ))}
          </Pie>
        </RePieChart>
      </ResponsiveContainer>

      {/* Centered label */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: 'translate(-50%, -50%)' }}
        textAlign="center"
      >
        <Typography variant="h4" component="div">
          85%
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Total Usage This Week
        </Typography>
      </Box>
    </Box>
  );
};

export default PieChart;
