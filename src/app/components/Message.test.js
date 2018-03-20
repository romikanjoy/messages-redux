import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message component', () => {
  const props = {
    message: {
      title: 'Test title',
      importance: 'Low',
      body: 'Test body'
    }
  };

  const wrapper = shallow(<Message {...props} />);

  it('should render title correctly', () => {
    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.find('h5').text()).toEqual(props.message.title);
    expect(wrapper.find('h5').hasClass('mb-1')).toBe(true);
  });

  it('should render importance correctly', () => {
    expect(wrapper.find('small')).toHaveLength(1);
    expect(wrapper.find('small').text()).toEqual(props.message.importance);
  });

  it('should render body correctly', () => {
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual(props.message.body);
    expect(wrapper.find('p').hasClass('mb-1')).toBe(true);
  });
});
