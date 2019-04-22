import React from 'react';
import CommentButton from './CommentButton';
import CommentForm from './CommentForm';
import {CommentModel} from '../Comment.Model';
import Comment from './Comment';

class CommentControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      comments: []
    }
    this.handleCommentClick = this.handleCommentClick.bind(this)
    this.handleAddNewComment = this.handleAddNewComment.bind(this)
  }

  handleCommentClick() {
    this.setState({formVisible: !this.state.formVisible})
  }

  handleAddNewComment(text) {
    let newCommentData = this.state.comments.slice();
    let newComment = new CommentModel(text, this.props.postId);
    console.log(newComment)
    console.log(text)
    console.log(this.props.postId)
    console.log(this.state.comments)
    newCommentData.push(newComment);
    this.setState({comments: newCommentData});
  }

  render() {
    let form;
    this.state.formVisible ? form = <CommentForm onCommentSubmit={this.handleAddNewComment}/> : form = null;
    return (
      <div>
        <CommentButton onCommentClick={this.handleCommentClick}/>
        {form}
        {this.state.comments.map((comment, index) =>
          <Comment text={comment.text}
            key={index}/>
        )}
      </div>
    )
  }
}


export default CommentControl;
