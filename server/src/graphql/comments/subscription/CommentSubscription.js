import CommentType from '../CommentType';
import pubSub, { EVENTS } from '../../../pubSub';

const CommentSubscription = {
  type: CommentType,
  subscribe: () => pubSub.asyncIterator(EVENTS.MESSAGE.SENDED),
};

export default CommentSubscription;
