// import React, { useState } from 'react';
import React from 'react';
import {
  HeaderContainer,
  LogoSpan,
  LogoText,
  ButtonsList,
  LogInButton,
  RegistrationButton,
  NavigationList,
  Navigation,
  HeaderNavigation,
  NavigationLink,
} from './Header.styled';

const Header = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <HeaderContainer>
      <HeaderNavigation>
        <LogoText>
          <LogoSpan>psychologists</LogoSpan>.services
        </LogoText>
        <Navigation>
          <NavigationList>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationList>
          <NavigationList>
            <NavigationLink to="psychologists">Psychologists</NavigationLink>
          </NavigationList>
        </Navigation>
        <ButtonsList>
          <li>
            <LogInButton type="button">Log In</LogInButton>
          </li>
          <li>
            <RegistrationButton type="button">Registration</RegistrationButton>
          </li>
        </ButtonsList>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;
