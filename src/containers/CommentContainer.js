import {connect} from 'react-redux';
import Comment from '../presentational/Comment';
import {thumbUp} from '../actions/actions';
import {thumbDown} from '../actions/actions';
import {deleteComment} from '../actions/actions';
import '../styles/CommentContainer.css';


const mapDispatchToProps = dispatch => ({
  thumbUp: (id) => dispatch(thumbUp(id)),
  thumbDown: (id) => dispatch(thumbDown(id)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);