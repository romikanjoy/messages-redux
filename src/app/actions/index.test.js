import * as types from './types';
import * as actions from './index';
import messages from '../../messages.json';

describe('action creators', () => {
  it('should create an action to fetch messages', () => {
    const fetchMessagesAction = {
      type: types.FETCH_MESSAGES,
      messages
    };
    expect(actions.fetchMessages(messages)).toEqual(fetchMessagesAction);
  });

  it('should create an action to add a message', () => {
    const message = { title: 'Test Title', importance: 'Low', body: 'Test Body' };
    const addMessageAction = {
      type: types.ADD_MESSAGE,
      message
    };
    expect(actions.addMessage(message)).toEqual(addMessageAction);
  });
});
