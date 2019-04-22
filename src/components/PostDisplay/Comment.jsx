import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return (
    <div>
      {props.text}
    </div>
  )
}

Comment.proptypes = {
  text: PropTypes.string
}

export default Comment;
