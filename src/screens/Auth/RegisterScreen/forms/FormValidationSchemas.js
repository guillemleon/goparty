import * as yup from 'yup';

export const customerRegisterValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email("Email don't have a valid format")
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Repeat the password'),
  prefix: yup.number().positive(),
  phone: yup.number().required('Phone is required'),
  /* termsAccepted: yup
    .boolean()
    .isTrue("Terms and services need to be accepted")
    .required("Terms and services need to be accepted"), */
});

export const companyRegisterValidationSchema = yup.object().shape({
  companyName: yup.string().required('Name is required'),
  email: yup
    .string()
    .email("Email don't have a valid format")
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Repeat the password'),
  prefix: yup.number().positive(),
  phone: yup.number().required('Phone is required'),
  country: yup.string().required('Country is required'),
  address: yup.string().required('Address is required'),
  cif: yup.string().required('CIF is required'),
  description: yup.string().required('Description is required'),
  /* termsAccepted: yup
    .boolean()
    .isTrue("Terms and services need to be accepted")
    .required("Terms and services need to be accepted"), */
});
