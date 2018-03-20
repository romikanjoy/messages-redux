import { FETCH_MESSAGES, ADD_MESSAGE } from '../actions/types';

const messagesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      return [...state, { id: state.length.toString(), ...action.message }];
    default:
      return state;
  }
};

export default messagesReducer;
