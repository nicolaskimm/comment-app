import React from 'react';
import './styles/App.css';
import CommentsListContainer from './containers/CommentsListContainer';
import AddCommentContainer from './containers/AddCommentContainer';


const App = () => {
	return (
		<div className='App'>
			<div className='commentsListContainer'>
				<CommentsListContainer />
			</div>
			<div className='addComment'>
				<AddCommentContainer />
			</div>
		</div>
	);
};

export default App;
