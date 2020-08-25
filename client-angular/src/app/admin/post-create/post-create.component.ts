import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../models/post';

import { QuillModule } from "ngx-quill";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
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
    let content: string = this.editorForm.get('editor').value;
    let post: Post = {
      id: "test1234",
      title: "New Post Title",
      content: content,
      createDate: new Date()
    }
    alert("Creating a post with this content: " + content);

    
  }

}
