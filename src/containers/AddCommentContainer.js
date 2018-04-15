import {connect} from 'react-redux';
import AddComment from '../containers/AddComment';
import {addComment} from '../actions/actions';
import '../styles/AddCommentContainer.css';

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddComment);