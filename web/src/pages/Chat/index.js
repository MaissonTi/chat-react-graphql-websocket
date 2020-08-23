import React from 'react';
import { Container, Chat, Contatos } from './styles';

import Conversation from './components/Conversation';
import MessageList from './components/MessageList';
import InputMessage from './components/InputMessage';
import SearchContato from './components/SearchContato';
import HeaderMessage from './components/HeaderMessage';

import { useSelector } from 'react-redux';

export default function() {
  const { conversation } = useSelector(state => state.chat);

  return (
    <Container>
      <Contatos>
        <SearchContato />
        <Conversation />
      </Contatos>
      <Chat>
        <HeaderMessage />
        {conversation && <MessageList conversation={conversation} />}
        <InputMessage />
      </Chat>
    </Container>
  );
}
