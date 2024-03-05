import React, { useState } from 'react';
import { FilterContainer } from 'components/Filter/Filter.styled';
import Filter from 'components/Filter/Filter';
import Psychologists from 'components/Psychologists/Psychologists';
// import PsychologistCard from 'components/Psychologists/PsychologistCard/PsychologistCard';

const PsychologistsPage = () => {
  const [filterOption, setFilterOption] = useState('Show all');

  const changeFilterHandler = chosenOption => {
    setFilterOption(chosenOption);
  };

  return (
    <FilterContainer>
      <Filter onFilterSelect={changeFilterHandler} />
      <Psychologists filterOption={filterOption} />
    </FilterContainer>
  );
};

export default PsychologistsPage;
