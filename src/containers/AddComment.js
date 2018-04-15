import React from "react";


class AddComment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	};

	handleChange(e) {
		this.setState({
			text: e.target.value
		})
		// console.log(this.state.text)
	};
	
	handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.addComment(this.state.text);
		// console.log(this.state.text)
		this.setState({text: ""});
	};
	
	render() {
		return (
			<form>
				<label>Add new comment</label>
				<input onChange={this.handleChange.bind(this)} value={this.state.text}/>
				<button onClick={this.handleSubmit.bind(this)}> send </button> 
		  	</form>
		)
	}
};
	
export default AddComment;