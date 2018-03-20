import React from 'react';
import MessagesContainer from '../containers/MessagesContainer';
import AddMessageContainer from '../containers/AddMessageContainer';

const App = () => (
  <div>
    <h4 className="display-4">Messages</h4>
    <AddMessageContainer />
    <MessagesContainer />
  </div>
);

export default App;
