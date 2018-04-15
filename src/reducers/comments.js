import {ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, THUMBUP_COMMENT, THUMBDOWN_COMMENT} from '../actions/actions';

function comments (state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state];
		case DELETE_COMMENT:
			return state.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.map(comment => comment.id === action.id ? comment.text: action.text : comment);
		case THUMBUP_COMMENT:
			return state.map(comment => comment.id === action.id ? {...comment, votes: comment.votes + 1} : comment);
		case THUMBDOWN_COMMENT:
			return state.map(comment => comment.id === action.id ? {...comment, votes: comment.votes - 1} : comment);
		default:
			return state;
	}
}

export default comments;


