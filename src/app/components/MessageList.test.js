import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList';
import Message from './Message';

describe('MessageList', () => {
  const mockFetchMessages = jest.fn();

  it('should render correctly before messages are loaded ', () => {
    const props = {
      messages: null,
      fetchMessages: mockFetchMessages
    };
    const wrapper = shallow(<MessageList {...props} />);

    expect(wrapper.find('.lead').text()).toEqual('Loading Messages...');
    expect(mockFetchMessages.mock.calls.length).toBe(1);
  });

  it('should render correctly if an empty list of messages are loaded.', () => {
    const props = {
      messages: [],
      fetchMessages: mockFetchMessages
    };
    const wrapper = shallow(<MessageList {...props} />);
    const leadText = 'You do not have any messages.';

    expect(wrapper.find('.lead').text()).toEqual(leadText);
    expect(wrapper.find(Message)).toHaveLength(0);
  });

  it('should render correctly after messages are loaded.', () => {
    const props = {
      messages: [
        {
          id: 0,
          title: 'Test Title 1',
          importance: 'Low',
          body: 'Test Message Body 1'
        },
        {
          id: 1,
          title: 'Test Title 2',
          importance: 'Medium',
          body: 'Test Message Body 2'
        }
      ],
      fetchMessages: mockFetchMessages
    };
    const wrapper = shallow(<MessageList {...props} />);
    const leadText = `You have ${props.messages.length} messages.`;

    expect(wrapper.find('.lead').text()).toEqual(leadText);
    expect(wrapper.find(Message)).toHaveLength(props.messages.length);
  });
});
