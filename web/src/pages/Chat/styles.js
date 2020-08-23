import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100%;
  max-height: 800px;
  max-width: 1200px;
  margin: 10px auto 0px;
  width: 100%;
`;

export const Contatos = styled.div`
  width: 30%;
  position: relative;
`;

export const Chat = styled.div`
  width: 70%;
  position: relative;
  z-index: 1;
  border-left: 1px solid #eeeeee;
  background-clip: padding-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;

  ::after {
    content: '';
    background: url('/images/bg-chat.png');
    opacity: 0.08;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
