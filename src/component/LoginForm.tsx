import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLocalStorage } from '../hooks/useLocalStorage.ts';
import '../styles/forms.css';

const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [rememberedEmail, setRememberedEmail] = useLocalStorage('rememberedEmail', '');

  const initialValues = { email: rememberedEmail || '', password: '', rememberMe: false };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    if (values.rememberMe) setRememberedEmail(values.email);
    setSuccessMessage('Login Successful!');
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="rememberMe" />
              Remember Me
            </label>
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default LoginForm;
