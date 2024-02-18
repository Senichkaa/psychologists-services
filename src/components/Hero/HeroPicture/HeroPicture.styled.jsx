import styled from 'styled-components';
import variables from 'common/Variables';

export const HeroPictureWrapper = styled.div`
  position: relative;
  max-width: 485px;
  margin-top: 80px;
  z-index: -1;
`;

export const CouchImage = styled.img`
  height: 525px;
  border-radius: 15px;
`;

export const CheckboxInfo = styled.div`
  position: absolute;
  bottom: 75px;
  right: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 310px;
  height: 120px;
  border-radius: 20px;
  background-color: ${variables.primaryMint};
`;

export const Checkbox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 13px;
  background-color: ${variables.primaryWhite};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Information = styled.p`
  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;

export const CouchesCounter = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: rgb(251, 251, 251);
`;

export const GroupContainer = styled.div`
  position: absolute;
  top: 40px;
  right: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #fbc75e;
  transform: rotate(18deg);
`;

export const QuestionContainer = styled.div`
  position: absolute;
  top: 180px;
  left: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #4535af;
  fill: ${variables.primaryWhite};
  transform: rotate(-15deg);
`;
