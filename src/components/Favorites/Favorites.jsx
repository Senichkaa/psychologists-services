import React, { useEffect, useState } from 'react';
import PsychologistCard from 'components/Psychologists/PsychologistCard/PsychologistCard';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { HeaderContainer } from 'components/Header/Header.styled';
import { NotificationMessage } from './Favorites.styled';
import { LoadMoreButton } from 'components/Psychologists/Psychologists.styled';

const Favorites = ({ filterOption }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [viewFavoriteCards, setViewFavoriteCards] = useState(1);

  const filterOptions = (cards, option) => {
    switch (option) {
      case 'A to Z':
        return cards.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'Z to A':
        return cards.sort((a, b) => b.name.localeCompare(a.name));
      case 'Less than 10$':
        return cards.filter(person => person.price_per_hour < 10);
      case 'Greater than 10$':
        return cards.filter(person => person.price_per_hour > 10);
      case 'Popular':
        return cards.filter(person => person.rating > 4);
      case 'Non popular':
        return cards.filter(person => person.rating <= 4);
      default:
        return cards;
    }
  };

  const filteredFavoriteCards = filterOptions(favoriteCards, filterOption);

  const loadMoreHandler = () => {
    const remainingCards = filteredFavoriteCards.length - viewFavoriteCards * 3;
    const newCards = Math.min(3, remainingCards);
    setViewFavoriteCards(previousCards => previousCards + newCards);
  };

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
      {filteredFavoriteCards.length === 0 ? (
        <HeaderContainer>
          <NotificationMessage>
            No favorites yet. You can choose it in catalog.
          </NotificationMessage>
        </HeaderContainer>
      ) : (
        <div>
          {filteredFavoriteCards
            .slice(0, viewFavoriteCards * 3)
            .map((favoriteCard, index) => (
              <PsychologistCard key={index} person={favoriteCard} />
            ))}
          {filteredFavoriteCards.length > viewFavoriteCards * 3 && (
            <LoadMoreButton onClick={loadMoreHandler}>Load more</LoadMoreButton>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
