import * as yup from 'yup';

export const initialValuesSchoolLogin = {
  email: '',
  password: '',
};

export const initialValuesRegister = {
  schoolId: '',
  name: '',
  head: '',
  place: '',
  contact: '',
  category: '',
  email: '',
  password: '',
};

export const schoolLoginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password is too short, should be 6 chars min'),
});

export const registerSchema = yup.object().shape({
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
