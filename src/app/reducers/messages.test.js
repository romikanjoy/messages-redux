import messagesReducer from './messages';
import { FETCH_MESSAGES, ADD_MESSAGE } from '../actions/types';
import messages from '../../messages.json';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(messagesReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_MESSAGES', () => {
    expect(messagesReducer([], {
      type: FETCH_MESSAGES,
      messages
    })).toEqual(messages);
  });

  it('should handle ADD_MESSAGE', () => {
    const message = { title: 'Test Title', importance: 'Low', body: 'Test Body' };
    expect(messagesReducer(messages, {
      type: ADD_MESSAGE,
      message
    })).toEqual([...messages, { id: messages.length.toString(), ...message }]);
  });
});
