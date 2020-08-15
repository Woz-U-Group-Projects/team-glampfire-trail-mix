import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.readPosts().subscribe(posts => { this.posts = posts; });
  }

}
