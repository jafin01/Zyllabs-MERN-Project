/* eslint-disable react/prop-types */
import React from 'react';
import { Alert, Snackbar } from '@mui/material';

function CustomSnackbar({
  open, handleClose, message, severity,
}) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
