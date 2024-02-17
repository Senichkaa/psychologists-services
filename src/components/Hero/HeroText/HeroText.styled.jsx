import styled from 'styled-components';
import variables from 'common/Variables';
import { NavLink } from 'react-router-dom';

export const HomePageSection = styled.section`
  display: flex;
  gap: 125px;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  padding: 0 128px 140px;
  background: radial-gradient(
    circle at 100% 100%,
    rgba(84, 190, 150, 0.6) 0%,
    rgba(84, 190, 150, 0.2) 25%,
    rgba(84, 190, 150, 0) 50%
  );
`;

export const HeroHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 80px;
  font-weight: 600;
  line-height: 82px;
  text-align: left;
  color: ${variables.primaryBlack};
`;

export const HeroSpan = styled.span`
  font-style: italic;
  color: ${variables.primaryMint};
`;

export const HeroWrapper = styled.div`
  max-width: 600px;
  margin-top: 125px;
`;

export const HeroMainText = styled.p`
  max-width: 515px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${variables.primaryBlack};
`;

export const HeroButton = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 18px;
  width: 235px;
  padding: 18px 50px;
  color: ${variables.primaryWhite};
  fill: ${variables.primaryWhite};
  background-color: ${variables.primaryMint};
  border-radius: 30px;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #47a07e;
  }
`;
