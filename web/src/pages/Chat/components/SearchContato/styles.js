import styled from 'styled-components';

export const Container = styled.div`
  min-height: 64px;
  border-bottom: 1px solid #eeeeee;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  div > svg {
    margin-left: 10px;
    color: #919191;
    cursor: pointer;
  }
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
`;

export const DivOptions = styled.div`
  display: flex;
`;

export const DivSettings = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  max-width: 45px;
  height: 45px;
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 16px;
`;
