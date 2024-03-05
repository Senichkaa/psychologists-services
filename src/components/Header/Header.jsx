// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
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
  Authentication,
  UserIcon,
  UserName,
} from './Header.styled';

import RegisterModal from 'components/Modal/RegisterModal/RegisterModal';
import LoginModal from 'components/Modal/LoginModal/LoginModal';

import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import icons from '../../assets/icons.svg';

const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [authentication, setAuthentication] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('You have successfully logged out'))
      .catch(error => {
        console.log(error);
      });
  };

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
        {authentication ? (
          <Authentication>
            <UserIcon>
              <svg width={20} height={20}>
                <use href={`${icons}#icon-group`} />
              </svg>
            </UserIcon>

            <UserName>{authentication.displayName}</UserName>
            <LogInButton onClick={userSignOut}>LogOut</LogInButton>
          </Authentication>
        ) : (
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
        )}
      </HeaderNavigation>
      {isLoginOpen && <LoginModal onClose={LoginModalClose} />}
      {isRegistrationOpen && <RegisterModal onClose={RegistrationModalClose} />}
    </HeaderContainer>
  );
};

export default Header;
