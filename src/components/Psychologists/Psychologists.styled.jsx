import variables from 'common/Variables';
import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  height: 52px;
  margin: 0 auto;
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  background-color: ${variables.primaryMint};
  color: rgb(251, 251, 251);
  cursor: pointer;
`;
