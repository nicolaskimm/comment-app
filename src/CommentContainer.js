import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUp} from './actions';
import {thumbDown} from './actions';
import {deleteComment} from './actions';
import './styles/CommentContainer.css';


const mapDispatchToProps = dispatch => ({
  thumbUp: (id) => dispatch(thumbUp(id)),
  thumbDown: (id) => dispatch(thumbDown(id)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);