import styled from 'styled-components';
import { darken } from 'polished';

export default styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #3b9eff;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2;

  &:hover {
    background: ${darken(0.1, '#3b9eff')};
  }
`;
