import styled from 'styled-components';

export const Container = styled.div`
  min-height: 64px;
  border-bottom: 1px solid #eeeeee;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const Title = styled.div`
  color: #263238;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.05px;
`;

export const Action = styled.div`
  display: flex;

  &:before {
    content: '';
    height: 10px;
    width: 10px;
    background: green;
    border-radius: 50%;
    margin-top: 2px;

    margin-right: 8px;
  }
`;
