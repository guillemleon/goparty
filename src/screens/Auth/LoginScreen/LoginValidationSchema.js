import * as yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email don't have a valid format")
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});
