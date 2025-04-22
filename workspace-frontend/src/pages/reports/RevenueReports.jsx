// src/pages/reports/RevenueReports.jsx
import React from 'react';
import PieChart from './components/PieChart';
import MostBookedWorkspaces from './components/MostBookedWorkspaces';
import PeakBookingHoursTable from './components/PeakBookingHoursTable';
import BookingHoursBarChart from './components/BookingHoursBarChart';
import DownloadExportButtons from './components/DownloadExportButtons';

const RevenueReports = () => {
  return (
    <div>
      <PieChart />
      <MostBookedWorkspaces />
      <PeakBookingHoursTable />
      <BookingHoursBarChart />
      <DownloadExportButtons />
    </div>
  );
};

export default RevenueReports;
