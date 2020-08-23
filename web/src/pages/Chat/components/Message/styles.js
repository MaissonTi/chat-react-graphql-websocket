import styled, { css } from 'styled-components';

export const Message = styled.div`
  /* min-height: 100px; */
  margin-bottom: 3px;
  display: flex;
  justify-content: flex-start;

  padding: 0px 35px;

  img{
    margin-right: 16px;
  margin-left: -40px;
  }

  ${props =>
    props.me &&
    css`
      flex-direction: row-reverse;

      img {
        margin-right: -40px;
        margin-left: 16px;
      }
    `}

  ${props =>
    !props.ant &&
    css`
      padding: 0px 50px;
    `}

  ${props =>
    props.ant &&
    css`
      margin-top: 15px;
    `}

`;

export const MessageDiv = styled.div`
  display: flex;
  max-width: 500px;
`;

export const Avatar = styled.img`
  max-width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  background-color: #fff;
`;

export const Context = styled.div`
  color: #263238;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: white;
  min-width: 125px;
  max-width: 480px;
  position: relative;

  ${props =>
    props.me &&
    css`
      color: #ffffff;
      background-color: #3f51b5;
    `}

  ${props =>
    props.ant &&
    css`
      &::before {
        content: '';
        width: 0px;
        height: 0px;
        border-style: solid;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        position: absolute;
        top: 0;

        ${props =>
          !props.me &&
          css`
            border-width: 0px 15px 20px 0px;
            border-color: transparent #fff transparent transparent;
            left: -13px;
          `}

        ${props =>
          props.me &&
          css`
            border-width: 0px 0px 20px 15px;
            border-color: transparent transparent transparent #3f51b5;
            right: -14px;
          `}
      }
    `}
`;

export const TextContext = styled.div`
  margin-right: 30px;
  margin-bottom: -10px;

  color: inherit;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  word-wrap: break-word;
`;

export const TitleContext = styled.div`
  color: #263238;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.05px;

  ${props =>
    props.me &&
    css`
      color: #ffffff;
    `}
`;

export const Hour = styled.div`
  display: flex;
  justify-content: flex-end;

  color: #546e7a8a;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.04px;
  margin-right: -10px;
  margin-bottom: -5px;

  ${props =>
    props.me &&
    css`
      color: #ffffff9e;
      margin-left: -10px;
    `}
`;

export const DayWeek = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;

  div {
    padding: 7px 25px;
    background: #3fb4b5;
    border-radius: 7%;
    color: white;
    letter-spacing: 3px;
    text-transform: uppercase;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    font-size: 10px;
  }
`;
