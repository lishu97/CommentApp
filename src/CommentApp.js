import React, {Component } from 'react'
import ReactDOM, {render} from 'react-dom'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component  {
	constructor() {
		super()
		this.state = {
			comments: []
		}
	}
	handleSubmitComment(comment) {
		this.state.comments.push(comment)
		console.log(this.state)
		this.setState(this.state.comments)
	}
	render() {
		return (
			<div className="wrapper" >
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList comments={this.state.comments}/>
			</div>
		)
	}
}
export default CommentApp
