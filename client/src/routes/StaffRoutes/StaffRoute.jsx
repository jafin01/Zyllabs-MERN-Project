import {
  createTheme, CssBaseline, ThemeProvider, useMediaQuery,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/Auth/LoginPage';
import StaffHome from '../../pages/StaffPages/StaffHome';
import { staffActions } from '../../store/staffSlice';
import { themeSettings } from '../../theme';

function staffRoute() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useDispatch();

  if (prefersDarkMode) dispatch(staffActions.setMode({ mode: 'dark' }));

  const mode = useSelector((state) => state.staff.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/staff/login" element={<AuthPage access="staff" />} />
          <Route path="/staff/home" element={<StaffHome />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default staffRoute;
