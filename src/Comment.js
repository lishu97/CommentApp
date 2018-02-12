import React, {Component } from 'react'
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types'

class Comment extends Component  {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment:PropTypes.func,
    index: PropTypes.number
  }
  constructor() {
    super()
    this.state = {
      timeString: ''
    }
  }
  componentWillMount() {
    this._updataTimeString()
    const timer = setInterval(this._updataTimeString.bind(this), 5000)
  }
  _updataTimeString() {
    const comment = this.props.comment
    let duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: (Math.round(duration /60))  
                  ? Math.round(duration / 60) + '分钟前'
                  : Math.round(Math.max(duration, 1)) + '秒钟前'
    })
  }
  handleDeleteComment() {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }
	render() {
		return (
			<div className="comment">
				<div className="comment-user">
					<span>{this.props.comment.username}：</span>
				</div>
				<p>{this.props.comment.content}</p>
				<span className="comment-createdtime">
				  {this.state.timeString}
				</span>
				<span className="comment-delete">
				  删除
				</span>
			</div>
		)
	}
}
export default Comment