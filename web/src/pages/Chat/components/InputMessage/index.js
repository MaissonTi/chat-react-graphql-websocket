import React from 'react';
import { useDispatch } from 'react-redux';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, ButtonSend } from './styles';
import { MdSend } from 'react-icons/all';
import { chatNewMessage } from '~/store/modules/chat/actions';

import { store } from '~/store';

export const USER_SEND_MESSAGE_MUTATION = gql`
  mutation SaveMessageMutation(
    $conversationId: String!
    $userId: String!
    $content: String!
  ) {
    SaveMessageMutation(
      input: {
        conversationId: $conversationId
        userId: $userId
        content: $content
      }
    ) {
      message {
        _id
        user {
          _id
          name
          file {
            _id
            path
          }
        }
        text
        createdAt
      }
    }
  }
`;

export default function InputMessage() {
  const dispatch = useDispatch();
  const { id: me_id } = store.getState().user.profile;
  const { conversation } = useSelector(state => state.chat);

  const [sendMessage] = useMutation(USER_SEND_MESSAGE_MUTATION, {
    onCompleted: ({ SaveMessageMutation }) => {
      dispatch(chatNewMessage(SaveMessageMutation.message));
    },
    onError: e => {
      console.log(e);
    },
  });

  function onSend(data, { resetForm }) {
    sendMessage({
      variables: {
        conversationId: conversation._id,
        userId: conversation.members[0]._id,
        content: data.content,
      },
    });

    resetForm({ content: '' });
  }

  return (
    <Container>
      <Form onSubmit={onSend}>
        <Input placeholder="Leave a message" name="content" />
        <ButtonSend type="submit">
          <MdSend size={40} />
        </ButtonSend>
      </Form>
    </Container>
  );
}
