import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PasswordStrengthIndicator from './PasswordStrengthIndicator.tsx';
import '../styles/forms.css';

const SignupForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const initialValues = { name: '', email: '', password: '', confirmPassword: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Must contain an uppercase letter')
      .matches(/\d/, 'Must contain a number')
      .matches(/[!@#$%^&*]/, 'Must contain a special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    setSuccessMessage('Sign Up Successful!');
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <PasswordStrengthIndicator password={values.password} />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default SignupForm;
