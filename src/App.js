import React from 'react';
import './styles/App.css';
import CommentsListContainer from './CommentsListContainer';
import AddCommentContainer from './AddCommentContainer';


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
