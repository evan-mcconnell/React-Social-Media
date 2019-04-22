import React from 'react';
import PropTypes from 'prop-types';

function CommentButton(props) {
  return(
    <div>
      <button onClick={props.onCommentClick}>Comment</button>
    </div>
  )
}

CommentButton.propTypes = {
  onCommentClick: PropTypes.func
}

export default CommentButton;
