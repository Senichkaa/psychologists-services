import React, { useEffect, useState } from 'react';
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
import AppointmentModal from 'components/Modal/AppointmentModal/AppointmentModal';
import { auth } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const PsychologistCard = ({ doctor, favoriteHandler, component }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const unlike = onAuthStateChanged(auth, user => {
      if (user) {
        const userId = user.uid;
        const storedFavorites =
          JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        setIsClicked(
          storedFavorites.some(fav => fav.avatar_url === doctor.avatar_url)
        );
      }
    });

    return () => unlike();
  }, [doctor.avatar_url]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      try {
        const userChoice = JSON.parse(localStorage.getItem(userId)) || {};
        userChoice.favorites = userChoice.favorites || [];

        if (isClicked) {
          userChoice.favorites.push(doctor.avatar_url);
        } else {
          userChoice.favorites = userChoice.favorites.filter(
            id => id !== doctor.avatar_url
          );
        }

        localStorage.setItem(userId, JSON.stringify(userChoice));
      } catch (error) {
        console.log(error);
      }
    }
  }, [isClicked, doctor.avatar_url]);

  const handleClick = () => {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      console.log('need to log in');
      return;
    }
    if (userId && doctor) {
      const newIsFavorite = !isClicked;
      setIsClicked(newIsFavorite);

      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];

      if (newIsFavorite) {
        localStorage.setItem(
          `favorites-${userId}`,
          JSON.stringify([...storedFavorites, doctor])
        );
      } else {
        const updatedFavorites = storedFavorites.filter(
          fav => fav.avatar_url !== doctor.avatar_url
        );
        localStorage.setItem(
          `favorites-${userId}`,
          JSON.stringify(updatedFavorites)
        );
        if (component === 'FavoritePage') {
          favoriteHandler();
        }
      }
    } else {
      console.log('error');
    }
  };

  const clickReadMoreHandler = () => {
    setIsMoreOpen(prevMoreOpen => !prevMoreOpen);
  };

  const clickAppointmentHandler = () => {
    setIsAppointmentOpen(prevAppointmentOpen => !prevAppointmentOpen);
  };

  const closeAppointmentHandler = () => {
    setIsAppointmentOpen(false);
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
            <HeartButton onClick={handleClick}>
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
            <AppointmentButton onClick={clickAppointmentHandler}>
              Make an appointment
            </AppointmentButton>
            {isAppointmentOpen && (
              <AppointmentModal
                doctor={doctor}
                onClose={closeAppointmentHandler}
              />
            )}
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
