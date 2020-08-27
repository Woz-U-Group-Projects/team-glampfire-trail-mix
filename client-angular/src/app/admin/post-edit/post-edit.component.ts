import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../models/post';

import { QuillModule } from "ngx-quill";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { stringify } from 'querystring';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post = new Post();
  editorForm = this.fb.group({
    title: ['', [Validators.required]]
  })
  title = new FormControl('');
  content = new FormControl('');

  constructor(private service: PostService, private route: ActivatedRoute, private fb: FormBuilder) { }
  

  ngOnInit() {
    this.editorForm = new FormGroup(
      { 'editor': new FormControl(null),
      'title': new FormControl(null) }
    );
    this.route.paramMap.subscribe(params => {
      this.service.readPost(params.get('id')).subscribe(p => {
        this.title.patchValue(p.title);
        this.content.patchValue(p.content);
        this.post = p;
      });
    });


  }

  onSubmit() {
    
    // Pull the title and content from the form, and set as the master Post
    this.post.title = this.title.value;
    this.post.content = this.content.value;

    // Send the post to the service
    this.service.updatePost(this.post);

  }

}
