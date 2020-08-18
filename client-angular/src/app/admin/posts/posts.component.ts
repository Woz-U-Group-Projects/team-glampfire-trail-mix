import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.readPosts().subscribe(posts => { this.posts = posts; });
  }

}