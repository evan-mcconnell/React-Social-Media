import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';


function PostDisplay(props) {
  return (
    <div>
      <p>This is the display.</p>
      {
        props.posts.map((post, index) =>
          <Post post={post} key={index}/>
        )
      }
    </div>
  )
}

PostDisplay.propTypes = {
  posts: PropTypes.array
}

export default PostDisplay;
