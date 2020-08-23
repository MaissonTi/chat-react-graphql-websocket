import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import chat from './chat/reducer';

export default combineReducers({
  auth,
  user,
  chat,
});
