import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuillToolbarComponent } from '@app/admin/quill-toolbar/quill-toolbar.component';
import { PostService } from '@app/services/post.service';
import { Post } from '@app/models/post';
import { AppComponent } from '@app/app.component';
import { environment } from '@environments/environment';

import Quill from 'quill';
import * as QuillBlotFormatter from 'quill-blot-formatter';
Quill.register('modules/blotFormatter', QuillBlotFormatter.default);


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  quill: Quill;

  // Represent the post with an object
  post = new Post();

  constructor(private service: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private quillToolbarComponent: QuillToolbarComponent,
              private app: AppComponent) { }


  ngOnInit() {
    this.app.loadExternalStyles('QuillTheme', environment.quillThemeUrl).then();
    // Pull the post from the current route
    this.route.paramMap.subscribe(params => {
      this.service.readPost(params.get('id')).subscribe(p => {
        const container = document.getElementById('post-editor');

        container.innerHTML = p.content;
        this.quill = new Quill(container, this.quillToolbarComponent.getOptions());

        this.post = p;
      });
    });
  }

  onSubmit() {

    // Pull the content from the form, and set as the master Post
    this.post.content = document.getElementsByClassName('ql-editor')[0].innerHTML;

    // Send the post to the service
    alert('Post saved successfully.');
    this.service.updatePost(this.post);

    this.router.navigate(['/admin/posts']).then();
  }

}
