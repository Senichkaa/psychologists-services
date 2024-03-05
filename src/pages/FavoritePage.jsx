import React, { useState } from 'react';
import Favorites from 'components/Favorites/Favorites';
import { HeaderContainer } from 'components/Header/Header.styled';
import Filter from 'components/Filter/Filter';

const FavoritePage = () => {
  const [filterOption, setFilterOption] = useState('Show all');

  const changeFilterHandler = chosenOption => {
    setFilterOption(chosenOption);
  };

  return (
    <HeaderContainer>
      <Filter onFilterSelect={changeFilterHandler} />
      <Favorites filterOption={filterOption} />
    </HeaderContainer>
  );
};

export default FavoritePage;
