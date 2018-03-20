import { FETCH_MESSAGES, ADD_MESSAGE } from './types';

export const fetchMessages = (messages) => ({
  type: FETCH_MESSAGES,
  messages
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
});
