import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-learner-hub',
  templateUrl: './learner-hub.component.html',
  styleUrls: ['./learner-hub.component.css']
})
export class LearnerHubComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post = new Post();
  userName?: string;
  loggedIn = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const userNameFromStorage = localStorage.getItem('username');
    if (userNameFromStorage) {
      this.userName = userNameFromStorage;
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(): void {
    if (!this.userName) {
      return;
    }

    this.newPost.user = { userName: this.userName,
      userID: 0,
      password: '',
      admin: false};

    this.postService.createPost(this.newPost).subscribe(post => {
      this.posts.unshift(post);
      this.newPost = new Post();
    });
  }

}
