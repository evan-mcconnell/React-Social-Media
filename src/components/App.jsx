import React from 'react';
import PostDisplay from './PostDisplay/PostDisplay';
import PostForm from './PostForm';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      postData: [
        {
          user: {
            username: 'Drogon',
            image: 'Drogon.jpeg'
          },
          text: 'This is a dummy post!',
          comments: []
        }
      ]
    };
    this.handleAddingPost = this.handleAddingPost.bind(this);
  }

  handleAddingPost(newPost) {
    let NewPostData = this.state.postData.slice();
    NewPostData.push(newPost);
    this.setState({postData : NewPostData});
  }

  handleAddingComment(newComment) {
    let PostToUpdate = this.state.postData.filter((post) => {
      if(post.id === newComment.postId) {
        return post;
      }

      PostToUpdate[0].comments.push(newComment);

      this.setState()
    });


  }

  render() {
    return (
      <div>
        <PostDisplay posts={this.state.postData}/>
        <PostForm onAddingPost={this.handleAddingPost}/>
      </div>
    );
  }
}

export default App;
