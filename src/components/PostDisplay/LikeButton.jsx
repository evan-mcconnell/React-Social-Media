import React from 'react';

class LikeButton extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      beenLiked: false
    }
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick() {
    this.setState({beenLiked: !this.state.beenLiked})
  }

  render() {
    let pngVisible = null;
    if (this.state.beenLiked) {
      pngVisible = 'heartfilled.png'
    } else {
      pngVisible = 'heart.png'
    }

    return(
      <div onClick={this.handleLikeClick}>
        <img src={require(`./../../assets/images/${pngVisible}`)} />
      </div>


    )
  }


}


export default LikeButton;
