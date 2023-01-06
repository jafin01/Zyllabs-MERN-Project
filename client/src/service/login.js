import baseUrl from '../constants/baseUrl';

const login = async (values, onSubmitProps, isSchool, isStaff, isStudent) => {
  let loggedInResponse;
  if (isSchool) {
    loggedInResponse = await fetch(`${baseUrl}/api/school/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
  }

  if (isStaff) {
    loggedInResponse = await fetch(`${baseUrl}/api/staff/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
  }

  if (isStudent) {
    loggedInResponse = await fetch(`${baseUrl}/api/student/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
  }

  const loggedIn = await loggedInResponse.json();
  onSubmitProps.resetForm();

  return loggedIn;
};

export default login;
