import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  BackdropWindow,
  ExitButton,
  ModalInput,
  ModalText,
  ModalTitle,
  PasswordFieldContainer,
  PrivacyButton,
  SignButton,
} from '../RegisterModal/RegisterModal.styled';
import { LoginModalWindow } from './LoginModal.styled';
import icons from '../../../assets/icons.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const toggleOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'auto';
};

const LoginModal = ({ onClose }) => {
  const submitHandler = async (values, { formReset }) => {
    try {
      const email = values.email;
      const password = values.password;

      await signInWithEmailAndPassword(auth, email, password);

      onClose();
      formReset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    toggleOverflow(true);
    const onButtonPress = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onButtonPress);

    return () => {
      toggleOverflow(false);
      document.removeEventListener('keydown', onButtonPress);
    };
  }, [onClose]);
  return (
    <BackdropWindow>
      <LoginModalWindow onClick={event => event.stopPropagation()}>
        <ModalTitle>Log In</ModalTitle>
        <ModalText>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </ModalText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form>
            <ModalInput type="text" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" />
            <PasswordFieldContainer>
              <ModalInput
                type="password"
                placeholder="Password"
                name="password"
              />
              <PrivacyButton>
                <svg width={16} height={16}>
                  <use href={`${icons}#icon-crossed-eye`} />
                </svg>
              </PrivacyButton>
            </PasswordFieldContainer>
            <ErrorMessage name="password" component="div" />
            <SignButton type="submit">Log in</SignButton>
          </Form>
        </Formik>
        <ExitButton onClick={onClose}>
          <svg width={16} height={16}>
            <use href={`${icons}#icon-cross`} />
          </svg>
        </ExitButton>
      </LoginModalWindow>
    </BackdropWindow>
  );
};

export default LoginModal;
