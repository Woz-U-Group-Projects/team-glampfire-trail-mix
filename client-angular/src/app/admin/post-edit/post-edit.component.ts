import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../models/post';

import { QuillModule } from "ngx-quill";
import { FormGroup, FormControl } from '@angular/forms';

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
      });
    });
    this.editorForm = new FormGroup(
      { 'editor': new FormControl(null) }
    );
  }

  onSubmit() {
    alert(this.editorForm.get('editor').value)
  }

}
