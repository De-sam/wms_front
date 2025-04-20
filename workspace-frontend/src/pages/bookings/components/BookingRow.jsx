import React from 'react';
import { TableRow, TableCell, IconButton, Tooltip } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';

const BookingsRow = ({ booking, onShowQR, onEdit, onCancel, onCheckIn }) => {
  const { user, workspace, date, time, duration, status, checked_in, expired } = booking;

  const renderQRCell = () => {
    if (expired) return <LockIcon color="disabled" />;
    return (
      <Tooltip title="Show QR Code">
        <IconButton onClick={() => onShowQR(booking)}>
          <QrCodeIcon />
        </IconButton>
      </Tooltip>
    );
  };

  const renderActions = () => {
    if (expired) return '-';
    return (
      <>
        {!checked_in && (
          <Tooltip title="Check In">
            <IconButton color="success" onClick={() => onCheckIn(booking.id)}>
              <CheckCircleIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Edit Booking">
          <IconButton color="primary" onClick={() => onEdit(booking)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Cancel Booking">
          <IconButton color="error" onClick={() => onCancel(booking.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  return (
    <TableRow hover>
      <TableCell>{user}</TableCell>
      <TableCell>{workspace}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell>{duration}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell align="center">{renderQRCell()}</TableCell>
      <TableCell align="center">{renderActions()}</TableCell>
    </TableRow>
  );
};

export default BookingsRow;
