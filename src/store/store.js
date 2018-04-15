import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import { addComment } from '../actions/actions';

const store = createStore(reducer);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

export default store;