import React from 'react';

import { Container, Title, Action } from './styles';
import { useSelector } from 'react-redux';

export default function HeaderMessage() {
  const { conversation } = useSelector(state => state.chat);

  return (
    <Container>
      {conversation && conversation.members && conversation.members[0] && (
        <>
          <Title>{conversation.members[0].name}</Title>
          <Action> online </Action>
        </>
      )}
    </Container>
  );
}
