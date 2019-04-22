import React from 'react';
import {Comment} from './../Comment.Model';

function CommentForm(props) {
  let _text = null;

  function handleCommentSubmit(e) {
    e.preventDefault();
    
    props.onCommentSubmit(_text.value);
  }

  return(
    <form onSubmit={handleCommentSubmit}>
      <input ref={(input) => {_text = input;}}/>
      <button type='submit'>Add Comment</button>
    </form>
  )
}

export default CommentForm;
