import styled from 'styled-components';
import variables from 'common/Variables';
import { Field } from 'formik';

export const BackdropWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  overflow: hidden;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 600px;
  height: 860px;
  padding: 64px;
  border-radius: 30px;
  background-color: ${variables.primaryWhite};
  z-index: 1000;
`;

export const ModalTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const ModalText = styled.p`
  margin-bottom: 40px;
  color: ${variables.secondaryGray};
`;

export const DoctorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
`;

export const DoctorImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;
export const DoctorNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DoctorPosition = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${variables.secondaryGray};
`;

export const DoctorsName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${variables.primaryBlack};
`;

export const FullSizeField = styled(Field)`
  width: 472px;
  height: 52px;
  margin-bottom: 18px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);

  &::placeholder {
    color: ${variables.primaryBlack};
  }
`;

export const HalfSizeField = styled(FullSizeField)`
  width: 232px;
`;

export const TimeSelect = styled.select`
  width: 232px;
  height: 52px;
  margin-bottom: 18px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);

  &::placeholder {
    color: ${variables.primaryBlack};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 472px;
  height: 52px;
  margin-top: 40px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 30px;
  color: ${variables.primaryWhite};
  background-color: ${variables.primaryMint};
  cursor: pointer;
`;

export const InputsWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 472px;
`;

export const CommentInput = styled(FullSizeField)`
  width: 472px;
  height: 116px;
`;

export const ExitButton = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 28px;
  right: 28px;
  background-color: transparent;
`;
