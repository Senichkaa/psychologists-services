import variables from 'common/Variables';
import styled from 'styled-components';

export const LoginModalWindow = styled.div`
  position: relative;
  max-height: 510px;
  max-width: 566px;
  height: 100%;
  padding: 64px;
  box-sizing: border-box;
  overflow-y: auto;
  border-radius: 30px;
  background: ${variables.primaryWhite};
`;
