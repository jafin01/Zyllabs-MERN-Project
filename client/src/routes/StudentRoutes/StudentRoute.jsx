import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  createTheme, CssBaseline, ThemeProvider, useMediaQuery,
} from '@mui/material';
import { themeSettings } from '../../theme';
import AuthPage from '../../pages/Auth/LoginPage';
import { studentActions } from '../../store/studentSlice';
import StudentHome from '../../pages/Homepage/StudentHome';

function studentRoute() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useDispatch();

  if (prefersDarkMode) dispatch(studentActions.setMode({ mode: 'dark' }));

  const mode = useSelector((state) => state.student.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/student/login" element={<AuthPage access="student" />} />
          <Route path="/student/home" element={<StudentHome />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default studentRoute;
