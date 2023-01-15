import * as yup from 'yup';

export const initialValuesMemberLogin = {
  email: '',
  password: '',
};

export const memberLoginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password is too short, should be 6 chars min'),
});
