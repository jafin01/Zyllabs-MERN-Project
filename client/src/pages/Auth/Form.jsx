/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Formik } from 'formik';
import {
  IconButton,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { memberLoginSchema, initialValuesMemberLogin } from '../../schema/memberSchema';
import {
  schoolLoginSchema,
  registerSchema,
  initialValuesSchoolLogin,
  initialValuesRegister,
} from '../../schema/schoolSchema';
import login from '../../service/login';
import register from '../../service/register';
import { schoolActions } from '../../store/schoolSlice';
import { staffActions } from '../../store/staffSlice';
import { studentActions } from '../../store/studentSlice';

function Form({ access }) {
  const [pageType, setPageType] = useState('login');
  const [showPassword, setShowPassword] = React.useState(false);
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';
  const isSchool = access === 'school';
  const isStaff = access === 'staff';
  const isStudent = access === 'student';
  const isMember = isStaff || isStudent;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) {
      const loggedIn = await login(values, onSubmitProps, isSchool, isStaff, isStudent);
      if (loggedIn) {
        if (isSchool) {
          delete loggedIn.school.password;
          dispatch(
            schoolActions.setSchoolLogin({
              school: loggedIn.school,
              token: loggedIn.token,
            }),
          );

          // navigation
        }
        if (isStaff) {
          delete loggedIn.staff.password;
          dispatch(
            staffActions.setStaffLogin({
              staff: loggedIn.staff,
              token: loggedIn.token,
            }),
          );

          navigate('/staff/home');
        }
        if (isStudent) {
          delete loggedIn.staff.password;
          dispatch(
            studentActions.setStudentLogin({
              student: loggedIn.student,
              token: loggedIn.token,
            }),
          );
          // navigation
        }
      }
    }
    if (isRegister) {
      await register(values, onSubmitProps);
      Navigate('/school/auth');
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const getInitialValues = () => {
    if (isSchool) {
      return isLogin ? initialValuesSchoolLogin : initialValuesRegister;
    }
    return initialValuesMemberLogin;
  };

  const getvalidationSchema = () => {
    if (isSchool) {
      return isLogin ? schoolLoginSchema : registerSchema;
    }
    return memberLoginSchema;
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
        initialValues={getInitialValues()}
        validationSchema={getvalidationSchema()}
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
                  autoFocus
                  required
                  fullWidth
                  id="schoolId"
                  label="School ID"
                  name="schoolId"
                  autoComplete="schoolId"
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  error={Boolean(touched.contact) && Boolean(errors.contact)}
                  helperText={touched.contact && errors.contact}
                />
                <TextField
                  select
                  margin="normal"
                  required
                  fullWidth
                  id="category"
                  label="Education Board"
                  name="category"
                  defaultValue=""
                  autoComplete="category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                  error={Boolean(touched.category) && Boolean(errors.category)}
                  helperText={touched.category && errors.category}
                >
                  <MenuItem value="CBSE">CBSE</MenuItem>
                  <MenuItem value="ICSE">ICSE</MenuItem>
                </TextField>
              </>
              )}
              { isMember && (
              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                id="schoolId"
                label="School ID"
                name="schoolId"
                autoComplete="schoolId"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.schoolId}
                error={Boolean(touched.schoolId) && Boolean(errors.schoolId)}
                helperText={touched.schoolId && errors.schoolId}
              />
              )}
              <TextField
                margin="normal"
                autoFocus={isSchool}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              <Grid container justifyContent="flex-end">
                {isLogin && (
                <Typography
                  color="#3366CC"
                  variant="body2"
                  sx={{
                    color: '#3366CC',
                    '&:hover': {
                      color: '#F3DEC9',
                      cursor: 'pointer',
                    },
                  }}
                >
                  Forgot password?
                </Typography>
                )}
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {isLogin && 'Sign in'}
                {isRegister && 'Sign up'}
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#3366CC',
                      '&:hover': {
                        color: '#F3DEC9',
                        cursor: 'pointer',
                      },
                    }}
                    onClick={() => {
                      setPageType((prev) => (prev === 'login' ? 'register' : 'login'));
                      resetForm();
                    }}
                  >
                    { isLogin && isSchool && 'Don\'t have an account? Sign up'}
                    { isRegister && 'Already have an account? Sign in'}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
