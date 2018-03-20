import { connect } from 'react-redux';
import AddMessageForm from '../components/AddMessageForm';
import { addMessage } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message))
});

export default connect(null, mapDispatchToProps)(AddMessageForm);
