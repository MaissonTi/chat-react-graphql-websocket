export function chatConversationActive(conversation) {
  return {
    type: '@chat/CONVERSATION_ACTION',
    payload: { conversation },
  };
}

export function chatNewMessage(newMessage) {
  return {
    type: '@chat/NEW_MESSAGE_ACTION',
    payload: { newMessage },
  };
}
