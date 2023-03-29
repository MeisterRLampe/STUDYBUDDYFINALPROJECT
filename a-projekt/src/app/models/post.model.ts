import { User } from './user.model';

export class Post {
  postId: number;
  title: string;
  content: string;
  timestamp: Date;
  user: User;

  constructor() {
    this.postId = 0;
    this.title = '';
    this.content = '';
    this.timestamp = new Date();
    this.user = new User();
  }
}
