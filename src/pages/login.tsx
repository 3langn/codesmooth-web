import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { useAppDispatch } from '@/app/hooks';
import { login } from '@/features/auth/authSlice';

import Input from '../common/Input';

const Login = () => {
  const dispatch = useAppDispatch();
  const [isHidden, setisHidden] = useState(false);
  const handleHidden = () => {
    setisHidden(!isHidden);
  };

  const initialValues = { email: '', password: '' };

  const formik = useFormik({
    initialValues,

    onSubmit: (values) => {
      const reqLogin = {
        email: values.email,
        password: values.password,
      };
      dispatch(login(reqLogin));
    },

    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address.').required('You must enter your email.'),
      password: Yup.string().required('You must enter your password.'),
    }),
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex h-screen w-screen flex-col items-center justify-center gap-4 "
    >
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="">{formik.errors.email}</div>
      ) : null}

      <Input
        id="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type={isHidden ? 'text' : 'password'}
      >
        {isHidden ? (
          <VisibilityIcon onClick={handleHidden} />
        ) : (
          <VisibilityOffIcon onClick={handleHidden} />
        )}
      </Input>
      {formik.touched.password && formik.errors.password ? (
        <div className="">{formik.errors.password}</div>
      ) : null}
    </form>
  );
};

export default Login;
