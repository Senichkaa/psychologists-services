import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { appointments } from './appointmentTimings';
import {
  BackdropWindow,
  CommentInput,
  DoctorImage,
  DoctorInfo,
  DoctorNameWrapper,
  DoctorPosition,
  DoctorsName,
  ExitButton,
  FullSizeField,
  HalfSizeField,
  InputsWrapper,
  ModalText,
  ModalTitle,
  ModalWindow,
  SubmitButton,
  TimeSelect,
} from './AppointmentModal.styled';
import icons from '../../../assets/icons.svg';

const appointmentSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  number: yup.string().required('Phone number is required'),
  time: yup.string().required(),
  email: yup.string().email('Invalid email').required('Email is required'),
  comment: yup.string().required('Comment is required'),
});

const initialValues = {
  name: '',
  number: '',
  time: '',
  email: '',
  comment: '',
};

const toggleOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'auto';
};

const AppointmentModal = ({ doctor, onClose }) => {
  const submitHandler = async (values, { formReset }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2500));
      formReset();
      onClose();
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
      <ModalWindow>
        <ModalTitle>Make an appointment with a psychologists</ModalTitle>
        <ModalText>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </ModalText>
        <DoctorInfo>
          <DoctorImage src={doctor.avatar_url} alt="psychologist-avatar" />
          <DoctorNameWrapper>
            <DoctorPosition>Your psychologists</DoctorPosition>
            <DoctorsName>{doctor.name}</DoctorsName>
          </DoctorNameWrapper>
        </DoctorInfo>
        <Formik
          initialValues={initialValues}
          validationSchema={appointmentSchema}
          onSubmit={submitHandler}
        >
          <Form>
            <FullSizeField name="name" placeholder="Name"></FullSizeField>
            <InputsWrapper>
              <HalfSizeField name="number" placeholder="+380"></HalfSizeField>
              <TimeSelect name="time" placeholder="Meeting time">
                <option value="" disabled>
                  00:00
                </option>
                {appointments.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </TimeSelect>
            </InputsWrapper>
            <FullSizeField name="email" placeholder="Email"></FullSizeField>
            <CommentInput name="comment" placeholder="Comment"></CommentInput>
            <SubmitButton type="submit">Send</SubmitButton>
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

export default AppointmentModal;
