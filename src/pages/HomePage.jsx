import React from 'react';
import HeroText from 'components/Hero/HeroText/HeroText';
import { HomePageSection } from 'components/Hero/HeroText/HeroText.styled';
import HeroPicture from 'components/Hero/HeroPicture/HeroPicture';

const HomePage = () => {
  return (
    <HomePageSection>
      <HeroText />
      <HeroPicture />
    </HomePageSection>
  );
};

export default HomePage;
