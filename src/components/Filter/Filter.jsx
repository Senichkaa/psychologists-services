import React, { useState } from 'react';
import { options } from './chooseOption';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import {
  FilterSection,
  FilterTitle,
  SelectList,
  Selection,
  SelectorButton,
} from './Filter.styled';

const Filter = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const optionSelectorHandler = choosedOption => {
    setSelectedOption(choosedOption);
    setIsSelectOpen(false);
  };

  return (
    <FilterSection>
      <FilterTitle>Filters</FilterTitle>
      <SelectorButton
        type="button"
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        {selectedOption}
        {isSelectOpen ? <FiChevronUp /> : <FiChevronDown />}
      </SelectorButton>
      {isSelectOpen && (
        <SelectList>
          {options.map((option, index) => (
            <Selection
              key={index}
              onClick={() => optionSelectorHandler(option)}
            >
              {option}
            </Selection>
          ))}
        </SelectList>
      )}
    </FilterSection>
  );
};

export default Filter;
