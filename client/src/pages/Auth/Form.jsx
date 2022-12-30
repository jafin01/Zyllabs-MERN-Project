import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  IconButton, InputAdornment, InputLabel, MenuItem, Select,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { authActions } from '../../store/authSlice';

const initialValuesLogin = {
  email: '',
  password: '',
};

const initialValuesRegister = {
  schoolId: '',
  name: '',
  head: '',
  place: '',
  contact: '',
  category: '',
  email: '',
  password: '',
};

const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password is too short, should be 6 chars min'),
});

const registerSchema = yup.object().shape({
  schoolId: yup.string().required('Required'),
  name: yup.string().required('Required'),
  head: yup.string().required('Required'),
  place: yup.string().required('Required'),
  contact: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
  email: yup.string().email('invalid email').required('Required'),
  category: yup.string().required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password is too short, should be 6 chars min'),
});

function Form() {
  const [pageType, setPageType] = useState('login');
  const [showPassword, setShowPassword] = React.useState(false);
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';
  const serverBaseUrl = useSelector((state) => state.serverBaseUrl.serverBaseUrl);
  const dispatch = useDispatch();

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(`${serverBaseUrl}/api/school/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();

    if (loggedIn) {
      delete loggedIn.school.password;
      dispatch(
        authActions.setLogin({
          school: loggedIn.school,
          token: loggedIn.token,
        }),
      );
      Navigate('/school/home');
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        { isLogin && 'Sign in'}
        { isRegister && 'Sign up'}
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box noValidate sx={{ mt: 1 }}>

              {isRegister && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="schoolId"
                  label="School ID"
                  name="schoolId"
                  autoComplete="schoolId"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.schoolId}
                  error={Boolean(touched.schoolId) && Boolean(errors.schoolId)}
                  helperText={touched.schoolId && errors.schoolId}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="School name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  error={Boolean(touched.name) && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="head"
                  label="School Head"
                  name="head"
                  autoComplete="head"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.head}
                  error={Boolean(touched.head) && Boolean(errors.head)}
                  helperText={touched.head && errors.head}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="head"
                  label="School Head"
                  name="head"
                  autoComplete="head"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.head}
                  error={Boolean(touched.head) && Boolean(errors.head)}
                  helperText={touched.head && errors.head}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="place"
                  label="Place"
                  name="place"
                  autoComplete="place"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.place}
                  error={Boolean(touched.place) && Boolean(errors.place)}
                  helperText={touched.place && errors.place}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="contact"
                  label="School Mob"
                  name="contact"
                  autoComplete="contact"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  error={Boolean(touched.contact) && Boolean(errors.contact)}
                  helperText={touched.contact && errors.contact}
                />
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.contact}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={values.password}
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {isLogin && 'Sign in'}
                {isRegister && 'Signu up'}
              </Button>
              <Grid container>
                {isLogin && (
                <Grid item xs>
                  <Typography color="#3366CC" variant="body2">
                    Forgot password?
                  </Typography>
                </Grid>
                )}
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#3366CC',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setPageType((prev) => (prev === 'login' ? 'register' : 'login'));
                      resetForm();
                    }}
                  >
                    { isLogin && 'Don\'t have an account? Sign up'}
                    { isRegister && 'Already have an account? Sign in'}
                  </Typography>
                </Grid>
              </Grid>

              {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{
                      mr: '0',
                      color: '#3366CC',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setPageType('login');
                      resetForm();
                    }}
                  >
                    Already have an account? Sign In
                  </Typography>
                </Grid>
              </Grid> */}
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
