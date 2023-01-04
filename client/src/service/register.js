import baseUrl from '../helpers/baseUrl';

const register = async (values, onSubmitProps) => {
  const registeredResponse = await fetch(`${baseUrl}/api/school/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  const registered = await registeredResponse.json();
  onSubmitProps.resetForm();

  return registered;
};

export default register;
