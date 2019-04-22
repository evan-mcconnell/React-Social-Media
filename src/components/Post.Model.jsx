import { v4 } from 'uuid';

export class Post {
  constructor(username, image, text) {
    this.user = {
      username : username,
      image: image
    };
    this.text = text
    this.id = v4()
  }
}
