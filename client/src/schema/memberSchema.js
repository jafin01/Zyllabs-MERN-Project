import * as yup from 'yup';

export const initialValuesMemberLogin = {
  schoolId: '',
  email: '',
  password: '',
};

export const memberLoginSchema = yup.object().shape({
  schoolId: yup.string().required('Required'),
  email: yup.string().email('invalid email').required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password is too short, should be 6 chars min'),
});
