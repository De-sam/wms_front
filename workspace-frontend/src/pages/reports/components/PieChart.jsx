// src/pages/reports/components/PieChart.jsx
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const usageValue = 85;
const remainingValue = 100 - usageValue;

const PieChart = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // full‑width on xs, then up to 700px
        width: { xs: '100%', sm: '90%', md: 700 },
        maxWidth: 700,
        // shorter on mobile, taller on desktop
        height: { xs: 280, sm: 320, md: 400 },
        position: 'relative',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        // center when it's narrower than its container
        mx: { xs: 0, sm: 'auto' },
        p: 1,
      }}
    >
      <ResponsiveContainer>
        <RePieChart>
          {/* Grey background ring */}
          <Pie
            data={[{ name: 'Remaining', value: 100 }]}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius="70%"
            outerRadius="100%"
            stroke="none"
            isAnimationActive={false}
          >
            <Cell fill={theme.palette.grey[300]} />
          </Pie>

          {/* Animated blue slice */}
          <Pie
            data={[
              { name: 'Usage', value: usageValue },
              { name: 'Blank', value: remainingValue },
            ]}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius="70%"
            outerRadius="100%"
            stroke="none"
            isAnimationActive
            animationBegin={100}
            animationDuration={1000}
          >
            <Cell fill={theme.palette.primary.main} />
            <Cell fill="transparent" />
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
        <Typography variant="h4">{usageValue}%</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Total Usage This Week
        </Typography>
      </Box>
    </Box>
  );
};

export default PieChart;
