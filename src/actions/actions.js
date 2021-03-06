import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMBUP_COMMENT = 'THUMBUP_COMMENT';
const THUMBDOWN_COMMENT = 'THUMBDOWN_COMMENT';


function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text: text,
		id: id
	}
}

function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id: id
	}
}

function thumbUp(id) {
	return {
		type: THUMBUP_COMMENT,
		id: id
	}
}

function thumbDown(id) {
	return {
		type: THUMBDOWN_COMMENT,
		id: id
	}
}

export {ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, THUMBUP_COMMENT, THUMBDOWN_COMMENT};
export {addComment, editComment, deleteComment, thumbUp, thumbDown};
