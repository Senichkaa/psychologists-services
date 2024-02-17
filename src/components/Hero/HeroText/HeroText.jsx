import React from 'react';
import {
  HeroButton,
  HeroHeader,
  HeroMainText,
  HeroSpan,
  HeroWrapper,
} from './HeroText.styled';
import icons from '../../../assets/icons.svg';
const HeroText = () => {
  return (
    <HeroWrapper>
      <HeroHeader>
        The road to the <HeroSpan>depths</HeroSpan> of the human soul
      </HeroHeader>
      <HeroMainText>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </HeroMainText>
      <HeroButton href="/">
        Get Started{' '}
        <span>
          <svg width={16} height={16}>
            <use href={`${icons}icon-arrow`} />
          </svg>
        </span>
      </HeroButton>
    </HeroWrapper>
  );
};

export default HeroText;
