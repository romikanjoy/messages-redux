import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message: { title, importance, body } }) => {
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{importance}</small>
      </div>
      <p className="mb-1">{body}</p>
    </div>
  );
};

Message.prototype = {
  message: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    importance: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default Message;
