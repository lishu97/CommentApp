import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit:PropTypes.func,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }
	constructor() {
		super()
		this.state = {
			username: '',
			content: ''
		}
	}
	componentWillMount() {
    this._loadUsername()
  }
	componentDidMount() {
    this.commentInput.focus()
  }  
  _saveUsername(username) {
    localStorage.setItem('username', username)
  }
  _loadUsername() {
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({username})
    }
  }
	handleUsernameChange(event) {
		this.setState({username: event.target.value})
	}
	handleUsernameBlur(event) {
    this._saveUsername(event.target.value)
  }
  handleContentChange(event) {
    this.setState({content: event.target.value})
  }
  handleSubmit(event) {
    if(this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({content: ''})
  }
  handleDeleteComment(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
	render() {
		return (
			/*<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名：</span>
					<div className="comment-field-input">
						<input 
						  value={this.state.username} 
						  onChange={this.handleUsernameChange.bind(this)}
						  onBlur={this.handleUsernameBlur.bind(this)}
						/>
					</div>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">评论内容：</span>
					<div className="comment-field-input">
						<textarea 
						  value={this.state.content}  
						  onChange={this.handleContentChange.bind(this)} 
						  ref={(commentInput) => this.commentInput = commentInput}  
						/>
					</div>
				</div>
				<div className="comment-field-button">
					<button onClick={this.handleSubmit.bind(this)}>发布</button>
				</div>
			</div>*/
			<div>
			  {this.props.comments.map((comment, i) => 
			    <Comment
			      comment={comment}
			      key={i}
			      index={i}
			      onDelete={this.handleDeleteComment.bind(this)} />			      
			  )}
			</div>
		)
		
	}
}
export default CommentInput
