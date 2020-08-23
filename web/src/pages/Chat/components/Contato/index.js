import React, { useMemo } from 'react';
import {
  Avatar,
  Container,
  Context,
  TitleContext,
  TextContext,
  HourDiv,
  HourText,
  Notice,
} from './styles';
import { useSelector } from 'react-redux';
import userImg from '~/assests/user.png';
import { getTimeAndWeek } from '~/util';

const Contato = ({ _id, members, lastMessage, onClick }) => {
  const { conversation } = useSelector(state => state.chat);

  const hour = useMemo(() => {
    return !lastMessage ? '' : getTimeAndWeek(lastMessage.createdAt);
  }, [lastMessage]);

  return (
    <Container
      onClick={onClick}
      active={conversation && conversation._id === _id}
    >
      <Avatar
        src={(members[0] && members[0].file && members[0].file.path) || userImg}
      />
      <Context>
        <TitleContext> {members[0].name} </TitleContext>
        <TextContext> {(lastMessage && lastMessage.text) || ''} </TextContext>
      </Context>
      <HourDiv>
        <HourText>{hour}</HourText>
        {lastMessage && lastMessage.aviso && (
          <Notice>{lastMessage.aviso}</Notice>
        )}
      </HourDiv>
    </Container>
  );
};

export default Contato;
