import styled from 'styled-components';
import variables from 'common/Variables';
import { Field } from 'formik';

export const BackdropWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 566px;
  max-height: 580px;
  height: 100%;
  padding: 64px;
  overflow-y: auto;
  border-radius: 30px;
  background-color: ${variables.primaryWhite};
  z-index: 1000;
`;

export const ModalTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 500;
`;

export const ModalText = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: rgba(25, 26, 21, 0.5);
`;

export const ModalInput = styled(Field)`
  width: 438px;
  height: 52px;
  margin-bottom: 18px;
  padding: 16px 18px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);

  &::placeholder {
    font-size: 16px;
    color: rgb(25, 26, 21);
  }
`;

export const PasswordFieldContainer = styled.div`
  position: relative;
`;

export const PrivacyButton = styled.button`
  position: absolute;
  bottom: 32px;
  right: 18px;
  background-color: transparent;
`;

export const SignButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 18px;

  height: 52px;
  margin-top: 22px;
  padding: 16px 189px;

  align-self: flex-end;
  box-sizing: border-box;

  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  text-decoration: none;

  border: 1px solid rgba(25, 26, 21, 0.2);
  background-color: ${variables.primaryMint};
  color: ${variables.primaryWhite};

  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgb(54, 163, 121);
  }
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
`;
