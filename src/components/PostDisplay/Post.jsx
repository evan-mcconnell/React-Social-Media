import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';


function Post(props) {
  return (
    <div>
      <PostHeader user={props.post.user}/>
      <PostContent text={props.post.text}/>
      <PostFooter postId={props.post.id}/>
    </div>
  )
}

Post.propTypes = {
  post : PropTypes.object
}

export default Post;
