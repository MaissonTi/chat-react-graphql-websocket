import produce from 'immer';

const INITIAL_STATE = {
  conversation: { _id: 0, countMessage: 0 },
  newMessage: null,
};

export default function chat(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@chat/CONVERSATION_ACTION': {
        draft.conversation = action.payload.conversation;
        break;
      }
      case '@chat/NEW_MESSAGE_ACTION': {
        draft.newMessage = action.payload.newMessage;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.conversation = null;
        draft.newMessage = false;
        break;
      }
      default:
    }
  });
}
