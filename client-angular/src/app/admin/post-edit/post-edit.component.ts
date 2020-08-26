import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../models/post';

import { QuillModule } from "ngx-quill";
import { FormGroup, FormControl } from '@angular/forms';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: Post;
  editorForm: FormGroup;

  constructor(private service: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.readPost(params.get('id')).subscribe(p => {
        this.post = p;
        this.post.id = p.id;
      });
    });
    this.editorForm = new FormGroup(
      { 'editor': new FormControl(null),
      'title': new FormControl(null) }
    );
    
    
  }

  onSubmit() {
    let title: string = this.editorForm.get('title').value;
    let content: string = this.editorForm.get('editor').value
    this.post.title = title;
    this.post.content = content;
    this.post.createDate = new Date();

    alert("Sending this post to the service: \n" + JSON.stringify(this.post));

    this.service.updatePost(this.post)
    
    
  }

}
