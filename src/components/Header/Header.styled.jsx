import variables from 'common/Variables';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  padding: 24px 128px;
  align-items: center;
  border-bottom: 1px solid rgba(25, 26, 21, 0.1);
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoSpan = styled.span`
  color: ${variables.primaryMint};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -2%;
`;

export const LogoText = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -2%;
  color: ${variables.primaryBlack};
`;

export const LogInButton = styled.button`
  text-align: center;
  padding: 14px 39px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  color: ${variables.primaryBlack};
  background-color: transparent;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
`;

export const RegistrationButton = styled.button`
  text-align: center;
  padding: 14px 40px;
  padding: 14px 39px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  color: ${variables.primaryWhite};
  background-color: ${variables.primaryMint};
  border-radius: 30px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  color: ${variables.primaryBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -1%;

  &.active {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -10px;
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${variables.primaryMint};
      transform: translateX(-50%);
    }
  }
`;

export const NavigationList = styled.li`
  position: relative;
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1184px;
`;
