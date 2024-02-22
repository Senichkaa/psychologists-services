import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  BackdropWindow,
  ExitButton,
  ModalInput,
  ModalText,
  ModalTitle,
  ModalWindow,
  PasswordFieldContainer,
  PrivacyButton,
  SignButton,
} from './RegisterModal.styled';
import icons from '../../../assets/icons.svg';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase';

const toggleOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'auto';
};

const RegisterModal = ({ onClose }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
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

  const submitHandler = async (values, { formReset }) => {
    try {
      const email = values.email;
      const password = values.password;

      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: values.name });

      formReset();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BackdropWindow>
      <ModalWindow onClick={event => event.stopPropagation()}>
        <ModalTitle>Registration</ModalTitle>
        <ModalText>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </ModalText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form>
            <ModalInput type="text" placeholder="Name" name="name" />
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
            <SignButton type="submit">Sign Up</SignButton>
          </Form>
        </Formik>
        <ExitButton onClick={onClose}>
          <svg width={16} height={16}>
            <use href={`${icons}#icon-cross`} />
          </svg>
        </ExitButton>
      </ModalWindow>
    </BackdropWindow>
  );
};

export default RegisterModal;
