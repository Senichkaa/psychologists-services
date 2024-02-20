import React from 'react';
import { FilterContainer } from 'components/Filter/Filter.styled';
import Filter from 'components/Filter/Filter';
import Psychologists from 'components/Psychologists/Psychologists';
// import PsychologistCard from 'components/Psychologists/PsychologistCard/PsychologistCard';

const PsychologistsPage = () => {
  return (
    <FilterContainer>
      <Filter />
      <Psychologists />
    </FilterContainer>
  );
};

export default PsychologistsPage;
