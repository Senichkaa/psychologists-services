import React from 'react';
import hero from '../../../assets/hero.jpeg';
import icons from '../../../assets/icons.svg';
import {
  Checkbox,
  CheckboxInfo,
  CouchImage,
  CouchesCounter,
  GroupContainer,
  HeroPictureWrapper,
  InfoContainer,
  Information,
  QuestionContainer,
} from './HeroPicture.styled';

const HeroPicture = () => {
  return (
    <HeroPictureWrapper>
      <CouchImage src={hero} alt="Psychologist Olena" width="485" />
      <CheckboxInfo>
        <Checkbox>
          <svg width={40} height={30} fill="#54BE96">
            <use href={`${icons}#icon-checkbox`} />
          </svg>
        </Checkbox>
        <InfoContainer>
          <Information>Experienced psychologists</Information>
          <CouchesCounter>15,000</CouchesCounter>
        </InfoContainer>
      </CheckboxInfo>
      <GroupContainer>
        <svg width={20} height={20}>
          <use href={`${icons}#icon-group`} />
        </svg>
      </GroupContainer>
      <QuestionContainer>
        <svg width={20} height={20}>
          <use href={`${icons}#icon-question`} />
        </svg>
      </QuestionContainer>
    </HeroPictureWrapper>
  );
};

export default HeroPicture;
