/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Form from './Form';

const theme = createTheme();

export default function authPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Container component="main" maxWidth="xs">

            <Form />

            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
              {'Copyright © '}
              <Link color="inherit" href="https://mui.com/">
                Zyllabs
              </Link>
              {' '}
              {new Date().getFullYear()}
            </Typography>
          </Container>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
