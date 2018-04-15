import {connect} from 'react-redux';
import CommentsList from '../presentational/CommentsList';

const mapStateToProps = state => ({
	comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);

