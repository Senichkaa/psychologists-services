import styled from 'styled-components';
import variables from 'common/Variables';

export const DoctorCard = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 32px auto;
  width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background: ${variables.cardBackground};
`;

export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  padding: 2px;
  margin-right: 24px;
  border-radius: 30px;
  border: 2px solid rgba(84, 190, 150, 0.2);
`;

export const DoctorPhoto = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 15px;
`;

export const RatingAndPriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PsychologistTitle = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  color: ${variables.secondaryGray};
`;

export const RatingInfo = styled.p`
  margin-left: 4px;
`;

export const PriceInfo = styled.p`
  margin-right: 28px;
`;

export const Price = styled.span`
  color: #38cd3e;
`;

export const Gap = styled.span`
  margin: 0 16px 0 16px;
  color: rgba(25, 26, 21, 0.2);
`;

export const HeartButton = styled.button`
  fill: white;
  stroke: black;
  background-color: transparent;
`;

export const DoctorName = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 783px;
`;

export const AdditionalPart = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  padding: 8px 16px;
  border-radius: 24px;
  font-weight: 500;
  background: rgb(243, 243, 243);
  color: rgb(138, 138, 137);
`;

export const PartValue = styled.span`
  margin-left: 2px;
  color: rgb(25, 26, 21);
`;

export const AboutInfo = styled.p`
  margin-top: 24px;
  margin-bottom: 48px;
  color: rgba(25, 26, 21, 0.5);
`;

export const ReadMoreButton = styled.button`
  font-weight: 500;
  text-decoration-line: underline;
  background-color: transparent;
`;

export const DoctorNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  width: 990px;
`;
