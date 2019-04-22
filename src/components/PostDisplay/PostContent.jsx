import React from 'react';
import PropTypes from 'prop-types'

function PostContent(props) {
  return(
    <div>
      {props.text}
    </div>
  )
}

PostContent.propTypes = {
  text: PropTypes.string
}

export default PostContent;
