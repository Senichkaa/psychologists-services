import React, { useState } from 'react';
import icons from '../../../assets/icons.svg';
import {
  AboutInfo,
  AdditionalInfoWrapper,
  AdditionalPart,
  DoctorCard,
  DoctorName,
  DoctorNameWrapper,
  DoctorPhoto,
  Gap,
  HeartButton,
  InfoWrapper,
  PartValue,
  PhotoWrapper,
  Price,
  PriceInfo,
  PsychologistTitle,
  RatingAndPriceInfo,
  RatingInfo,
  ReadMoreButton,
} from './PsychologistCard.styled';
import Additional from 'components/Additional/Additional';
import { AppointmentButton } from 'components/Additional/Additional.styled';

const PsychologistCard = ({ doctor }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const clickReadMoreHandler = () => {
    setIsMoreOpen(prevMoreOpen => !prevMoreOpen);
  };

  return (
    <DoctorCard>
      <PhotoWrapper>
        <DoctorPhoto src={doctor.avatar_url} alt="doctor" />
      </PhotoWrapper>
      <InfoWrapper>
        <DoctorNameWrapper>
          <PsychologistTitle>Psychologist</PsychologistTitle>
          <RatingAndPriceInfo>
            <svg width={17} height={13}>
              <use href={`${icons}#icon-star`} />
            </svg>
            <RatingInfo>Rating: {doctor.rating}</RatingInfo>
            <PriceInfo>
              <Gap>|</Gap>
              Price / hour: <Price>${doctor.price_per_hour}</Price>
            </PriceInfo>
            <HeartButton>
              <svg width={26} height={26}>
                <use href={`${icons}#icon-heart`} />
              </svg>
            </HeartButton>
          </RatingAndPriceInfo>
        </DoctorNameWrapper>
        <DoctorName>{doctor.name}</DoctorName>
        <AdditionalInfoWrapper>
          <AdditionalPart>
            Experience: <PartValue>{doctor.experience}</PartValue>
          </AdditionalPart>
          <AdditionalPart>
            License: <PartValue>{doctor.license}</PartValue>
          </AdditionalPart>
          <AdditionalPart>
            Specialization: <PartValue>{doctor.specialization}</PartValue>
          </AdditionalPart>
          <AdditionalPart>
            Initial consultation:
            <PartValue>{doctor.initial_consultation}</PartValue>
          </AdditionalPart>
        </AdditionalInfoWrapper>
        <AboutInfo>{doctor.about}</AboutInfo>
        {isMoreOpen ? (
          <>
            <ul>
              {doctor.reviews.map((review, index) => (
                <Additional key={index} review={review} index={index} />
              ))}
            </ul>
            <AppointmentButton>Make an appointment</AppointmentButton>
          </>
        ) : (
          <ReadMoreButton onClick={clickReadMoreHandler}>
            Read More
          </ReadMoreButton>
        )}
      </InfoWrapper>
    </DoctorCard>
  );
};

export default PsychologistCard;
