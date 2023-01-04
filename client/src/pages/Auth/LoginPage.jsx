/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { Paper } from '@mui/material';
// import { Box } from '@mui/material';
import { Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import Form from './Form';

export default function AuthPage({ access }) {
  const theme = useTheme();
  const mode = useSelector((state) => state.school.mode);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box component="section">
          <Typography
            component="h2"
            variant="button"
            color={mode === 'light' ? theme.palette.primary.dark : '#F3DEC9'}
            align="center"
            p={2}
          >
            <SchoolIcon sx={{ width: '1' }} />
            {`zyllabs - ${access}`}
          </Typography>
        </Box>
        <Form access={access} />
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Zyllabs
          </Link>
          {' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </>
  );
}
