import styled from 'styled-components';
import variables from 'common/Variables';

export const FilterContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  padding: 0 128px;
`;

export const FilterSection = styled.section`
  /* position: relative; */
  display: inline-block;
`;

export const FilterTitle = styled.h1`
  margin-top: 64px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(138, 138, 137);
`;

export const SelectorButton = styled.button`
  display: flex;
  align-items: center;
  gap: 130px;
  width: 225px;
  height: 50px;
  padding: 14px 0px 14px 18px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 14px;
  background: ${variables.primaryMint};
  color: ${variables.primaryWhite};
  cursor: pointer;
`;

export const SelectList = styled.ul`
  position: absolute;
  /* top: 100%;
  left: 0; */
  padding-right: 80px;
  padding-left: 10px;
  margin: 14px 10px 14px 0;
  width: 225px;
  list-style: none;
  border-radius: 14px;
  color: rgba(25, 26, 21, 0.3);
  background-color: ${variables.primaryWhite};
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  overflow-y: auto;
  z-index: 100;
`;

export const Selection = styled.li`
  margin-bottom: 8px;
  margin-top: 14px;
  color: rgba(25, 26, 21, 0.3);
  cursor: pointer;
`;
