import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AddMessageContainer from '../containers/AddMessageContainer';
import MessagesContainer from '../containers/MessagesContainer';

describe('App component', () => {

  const wrapper = shallow(<App />);

  it('should render header', () => {
    expect(wrapper.find('h4').text()).toEqual('Messages');
    expect(wrapper.find('h4').hasClass('display-4')).toBe(true);
  });


  it('should render AddMessageContainer', () => {
    expect(wrapper.find(AddMessageContainer)).toHaveLength(1);
  });

  it('should render MessagesContainer', () => {
    expect(wrapper.find(MessagesContainer)).toHaveLength(1);
  });

});
