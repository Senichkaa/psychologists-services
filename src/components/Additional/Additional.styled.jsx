import variables from 'common/Variables';
import styled from 'styled-components';

export const FeedbackImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #54be9633;
  color: ${variables.primaryMint};
`;

export const MarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomerInfo = styled.div`
  display: flex;
`;

export const CustomerName = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${variables.primaryBlack};
`;

export const CustomerRate = styled.p`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${variables.primaryBlack};
`;

export const CustomerComment = styled.p`
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(25, 26, 21, 0.5);
`;

export const AppointmentButton = styled.button`
  width: 228px;
  height: 50px;
  padding: 14px 32px;
  margin-top: 15px;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${variables.primaryWhite};
  background-color: ${variables.primaryMint};
`;
