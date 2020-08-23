import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #ededed;
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
  box-shadow: inset 0px 7px 7px 0px #c7bbbb6b;
  transition: all 0.3s linear;
  left: 100%;
  bottom: 0px;

  padding: 20px;

  ${props =>
    props.open
      ? css`
          transform: translateX(-100%);
        `
      : css`
          transform: translateX(0%);
        `}
`;
