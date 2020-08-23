import styled, { css } from 'styled-components';

export const Avatar = styled.img`
  max-width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 16px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid #eeeeee;
  background-clip: padding-box;

  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background: #eee;
      box-shadow: inset 4px 0px 0px #3f51b5;
    `}
`;

export const Context = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
  width: 200px;
`;

export const TitleContext = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #263238;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.05px;
`;

export const TextContext = styled.div`
  color: #546e7a;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.05px;
`;

export const HourDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 16px;
  flex-direction: column;
`;

export const HourText = styled.div`
  color: #546e7a;
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.04px;
`;

export const Notice = styled.div`
  background-color: rgb(244, 67, 54);
  color: rgb(255, 255, 255);
  border-radius: 10px;
  height: 18px;
  padding: 2px;
  min-width: 18px;
  margin-top: 2px;
  text-align: center;
`;
