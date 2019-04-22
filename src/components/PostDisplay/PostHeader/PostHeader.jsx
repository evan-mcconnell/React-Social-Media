import React from 'react';
import PropTypes from 'prop-types'

function PostHeader(props) {
  const imgStyle = {
    borderRadius: "50%"
  }
  return(
    <div style={{backgroundColor: "teal"}}>
      <img style={imgStyle} src={require(`./../../../assets/images/${props.user.image}`)}/>
      <span>{props.user.username}</span>
      <span>Date Goes here</span>
    </div>
  )
}

PostHeader.proptypes = {
  user: PropTypes.object
}

export default PostHeader;
