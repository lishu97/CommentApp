import React, {Component } from 'react'
import ReactDOM, {render} from 'react-dom'
import Comment from './Comment'

class CommentList extends Component  {
	static defaultProps = {comments: []}
	render() {
		const comments = this.props.comments
		return (
			<div>
				{comments.map((comment, index) => {
					return (
						<div key={index}>
							<Comment comment={comment} />
						</div>
					)
				})}
			</div>
		)
	}
}

export default CommentList