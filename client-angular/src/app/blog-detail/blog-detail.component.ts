import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: Post;
  PAGE_URL: string;
  disqusSrc: string;

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router,
              private settingsService: SettingsService) { }

  getSettings() {
    this.settingsService.getSettings().subscribe(setttings => {
      this.disqusSrc = setttings.disqusShortname + 'embed.js';
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.readPost(params.get('id')).subscribe(p => {
        this.post = p;
      });
    });
    this.PAGE_URL = this.router.url;
    this.getSettings();
  }

}
