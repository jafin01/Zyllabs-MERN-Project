import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, useMediaQuery } from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/Auth/LoginPage';
import { schoolActions } from '../../store/schoolSlice';
import { themeSettings } from '../../theme';

function schoolRoute() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useDispatch();

  if (prefersDarkMode) dispatch(schoolActions.setMode({ mode: 'dark' }));

  const mode = useSelector((state) => state.school.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/school/auth" element={<AuthPage access="school" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default schoolRoute;
