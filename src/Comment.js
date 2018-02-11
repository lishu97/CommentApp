import React, {Component } from 'react'
import ReactDOM, {render} from 'react-dom'

class Comment extends Component  {
	render() {
		return (
			<div className="comment">
				<div className="comment-user">
					<span>{this.props.comment.username}：</span>
				</div>
				<p>{this.props.comment.content}</p>
			</div>
		)
	}
}
export default Comment