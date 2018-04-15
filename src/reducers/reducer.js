import { combineReducers } from 'redux';
import comments from '../reducers/comments';
import users from '../reducers/users';

const reducer = combineReducers({
    comments,
    users
});

export default reducer;