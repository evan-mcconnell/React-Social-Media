import React from 'react';
import LikeButton from './LikeButton';
import CommentControl from './CommentControl';
import PropTypes from 'prop-types';

function PostFooter(props) {
  return (
    <div>
      <LikeButton />
      <CommentControl postId={props.postId}/>

    </div>
  )
}

PostFooter.PropTypes =  {
  postId : PropTypes.string
}

export default PostFooter;
