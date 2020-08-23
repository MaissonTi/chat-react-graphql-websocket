import React from 'react';
import { useDispatch } from 'react-redux';
import Contato from '../Contato';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Container } from './styles';
import { store } from '~/store';

import { chatConversationActive } from '~/store/modules/chat/actions';

const GET_CONVERSATIONS_QUERY = gql`
  query conversations {
    conversations {
      _id
      members {
        _id
        name
        file {
          _id
          path
        }
      }
      lastMessage {
        text
        createdAt
      }
      countMessage
    }
  }
`;

const Conversation = () => {
  const dispatch = useDispatch();

  const { data, loading } = useQuery(GET_CONVERSATIONS_QUERY);

  const handleUserTo = item => {
    dispatch(chatConversationActive(item));
  };

  return (
    <Container>
      {!loading &&
        data &&
        data.conversations.map(
          ({ _id, members, lastMessage, countMessage }) => (
            <Contato
              onClick={() =>
                handleUserTo({ _id, members, lastMessage, countMessage })
              }
              key={_id}
              _id={_id}
              members={members}
              lastMessage={lastMessage}
            />
          )
        )}
    </Container>
  );
};

export default Conversation;
