// import React, { useState } from 'react';
import React, { useState } from 'react';
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

import RegisterModal from 'components/Modal/RegisterModal/RegisterModal';
import LoginModal from 'components/Modal/LoginModal/LoginModal';

const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const RegistrationModalOpen = () => {
    setIsRegistrationOpen(true);
  };

  const RegistrationModalClose = () => {
    setIsRegistrationOpen(false);
  };

  const LoginModalOpen = () => {
    setIsLoginOpen(true);
  };

  const LoginModalClose = () => {
    setIsLoginOpen(false);
  };

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
            <LogInButton type="button" onClick={LoginModalOpen}>
              Log In
            </LogInButton>
          </li>
          <li>
            <RegistrationButton type="button" onClick={RegistrationModalOpen}>
              Registration
            </RegistrationButton>
          </li>
        </ButtonsList>
      </HeaderNavigation>
      {isLoginOpen && <LoginModal onClose={LoginModalClose} />}
      {isRegistrationOpen && <RegisterModal onClose={RegistrationModalClose} />}
    </HeaderContainer>
  );
};

export default Header;
