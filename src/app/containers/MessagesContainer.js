import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import { fetchMessages } from '../actions';
import data from '../../messages.json';

const mapStateToProps = (state) => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(fetchMessages(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
