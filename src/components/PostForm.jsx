import React from 'react';
import {Post} from './Post.Model';
import PropTypes from 'prop-types';

function PostForm(props) {
  let _text = null;

  function handlePostFormSubmit(e) {
    e.preventDefault();
    let newPost = new Post('Drogon', 'Drogon.jpeg', _text.value);
    props.onAddingPost(newPost);
    _text.value = '';
  }

  return(
    <form onSubmit={handlePostFormSubmit}>
      <textarea ref={(input) => {_text = input;}}/>
      <button type='submit'>Post</button>
    </form>
  );
}

PostForm.propTypes = {
  onAddingPost: PropTypes.func
}

export default PostForm;
