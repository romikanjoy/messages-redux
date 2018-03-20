import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends React.Component {

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    const margin = { marginTop: 20, marginBottom: 20 };

    if (!messages) {
      return <div className="lead" style={margin}>Loading Messages...</div>;
    }

    const nonZero = <div className="lead" style={margin}>You have {messages.length} messages.</div>;
    const zero = <div className="lead" style={margin}>You do not have any messages.</div>;

    return (
      <div>
        {messages.length > 0 ? nonZero : zero}
        <div className="list-group" style={margin}>
          {messages.map((message) => <Message key={message.id} message={message} />)}
        </div>
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      importance: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ),
  fetchMessages: PropTypes.func.isRequired
};

export default MessageList;
