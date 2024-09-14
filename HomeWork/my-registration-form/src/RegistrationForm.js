import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().min(2, 'Ім\'я має містити мінімум 2 символи').required('Ім\'я є обов\'язковим'),
    lastName: Yup.string().min(2, 'Прізвище має містити мінімум 2 символи').required('Прізвище є обов\'язковим'),
    email: Yup.string().email('Невалідна пошта').required('Пошта є обов\'язковою'),
    username: Yup.string().min(4, 'Юзернейм має містити мінімум 4 символи').required('Юзернейм є обов\'язковим'),
    password: Yup.string().min(6, 'Пароль має містити мінімум 6 символів').required('Пароль є обов\'язковим'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Паролі мають співпадати').required('Підтвердження паролю є обов\'язковим'),
    phoneNumber: Yup.string().matches(/^\+?3?8?(0\d{9})$/, 'Невалідний номер телефону').required('Номер телефону є обов\'язковим'),
  });

  const handleSubmit = (values, { resetForm }) => {
    localStorage.setItem('user', JSON.stringify(values));
    alert('Registration successful');
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
          phoneNumber: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
          </div>

          <button type="submit" className="submit-button">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
