import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Paper, Typography } from '@mui/material';

const data = [
  { time: '9 AM', bookings: 12 },
  { time: '10 AM', bookings: 20 },
  { time: '11 AM', bookings: 18 },
  { time: '12 PM', bookings: 25 },
  { time: '1 PM', bookings: 22 },
  { time: '2 PM', bookings: 15 },
  { time: '3 PM', bookings: 10 },
];

const BookingHoursBarChart = () => {
  return (
    <Paper elevation={0} sx={{ height: 300, p: 1 }}>
      <Typography variant="subtitle1" gutterBottom>
        Bookings per Hour
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="bookings" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default BookingHoursBarChart;
