import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    padding-top: 9px;
    border-top: 1px solid #eeeeee;
    min-height: 64px;
    justify-content: center;
    background-color: white;

    input {
      border: 0;
      border-radius: 4px;
      padding: 15px;
      margin: 0 0 10px 10px;
      width: 100%;
      max-width: 750px;
      box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
        0 1px 3px 0 rgba(63, 63, 68, 0.15);
      &::placeholder {
        color: #000;
      }
    }
  }
`;

export const ButtonSend = styled.button`
  background: none;
  border: none;
  width: auto;
  height: auto;
  svg {
    color: #3f51b5;
    margin: -8px 10px 0px;
  }

  &:active {
  }
`;
