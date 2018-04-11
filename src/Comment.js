import React from 'react';

const Comment = ({text, votes, id, thumbUp, thumbDown, deleteComment}) => 
	<li>
		<p>{text}<span>{votes}</span></p>
		<button onClick={() => thumbUp(id)} className='like'>like</button>
		<button onClick={() => thumbDown(id)} className='like'>dislike</button>
		<button onClick={() => deleteComment(id)}>x</button>
	</li>;

export default Comment;