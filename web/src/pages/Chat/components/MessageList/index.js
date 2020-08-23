import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { gql } from 'apollo-boost';
import { useSubscription, useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';

import Scroll from '~/components/Scroll';
import Message from '../Message';

import { store } from '~/store';

const MESSAGE_SUBSCRIPTION = gql`
  subscription onMessageReceived($conversationId: String!) {
    MessageSended(conversationId: $conversationId) {
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
`;

const GET_CONVERSATIONS_QUERY = gql`
  query messages($conversationId: String!, $limit: Int!, $offset: Int!) {
    messages(conversationId: $conversationId, limit: $limit, offset: $offset) {
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
`;

const LIMIT_PAGE = 50;
const PER_PAGE = 15;

export default function MessageList({ conversation }) {
  const scroll = useRef(null);

  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(LIMIT_PAGE);

  const { _id: me_id } = store.getState().user.profile;

  const { newMessage } = useSelector(state => state.chat);

  // useEffect(() => {
  //   scroll.current.onScrollBottom();
  // }, [messages]);

  const new_offset = useMemo(
    () => conversation.countMessage - LIMIT_PAGE - offset,
    [offset, conversation]
  );

  useSubscription(MESSAGE_SUBSCRIPTION, {
    variables: {
      conversationId: conversation._id,
    },
    onSubscriptionData: ({ subscriptionData }) => {
      setMessages([...messages, subscriptionData.data.MessageSended]);
    },
    onError: e => {
      console.log(e);
    },
  });

  const { loading } = useQuery(GET_CONVERSATIONS_QUERY, {
    variables: {
      conversationId: conversation._id,
      limit: new_offset < 0 ? new_offset + PER_PAGE : limit,
      offset: new_offset < 0 ? 0 : new_offset,
    },
    fetchPolicy: 'no-cache',
    onCompleted: response => {
      // if (messages.length !== conversation.countMessage)
      //   if (messages.length === 1) setMessages(response.messages);
      //   else setMessages([...response.messages, ...messages]);
      setMessages([...response.messages]);
    },
    onError: e => {
      console.log(e);
    },
  });

  useEffect(() => {
    if (newMessage) setMessages([...messages, newMessage]);
  }, [newMessage]);

  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);

  const MessageRender = useCallback(() => {
    if (!messages) return <></>;

    return messages.map((item, index) => (
      <Message
        key={item._id}
        me={item.user._id === me_id}
        data={item}
        dataOld={messages[index - 1]}
      />
    ));
  }, [messages]);

  return (
    <>
      {new_offset > 0 && (
        <button
          onClick={() => {
            setOffset(offset + PER_PAGE);
          }}
        >
          Carregar mais
        </button>
      )}
      <Scroll
        count={messages.length}
        loadMore={() => {
          setOffset(offset + PER_PAGE);
        }}
        hasMore={messages.length !== conversation.countMessage}
      >
        <MessageRender />
      </Scroll>
    </>
  );
}
