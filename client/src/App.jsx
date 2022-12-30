import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/Auth/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/auth/school" element={<AuthPage state="login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
