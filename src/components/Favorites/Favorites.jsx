import React, { useEffect, useState } from 'react';
import PsychologistCard from 'components/Psychologists/PsychologistCard/PsychologistCard';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Favorites = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userId = auth.currentUser?.uid;
        if (userId) {
          const storedFavorites =
            (await JSON.parse(localStorage.getItem(`favorites-${userId}`))) ||
            [];
          setFavoriteCards(storedFavorites);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const dislike = onAuthStateChanged(auth, user => {
      if (user) {
        fetchFavorites();
      }
    });

    return () => dislike();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favoriteCards.map((favoriteCard, index) => {
          return <PsychologistCard key={index} person={favoriteCard} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
