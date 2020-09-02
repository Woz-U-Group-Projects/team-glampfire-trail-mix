import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../models/post';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  post = new Post();
  editorForm = this.fb.group({
    title: ['', [Validators.required]]
  });
  title = new FormControl('');
  content = new FormControl('');

  constructor(private service: PostService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.editorForm = new FormGroup(
      { editor: new FormControl(null),
      title: new FormControl(null) }
    );
    // this.route.paramMap.subscribe(params => {
    //   this.service.readPost(params.get('id')).subscribe(p => {
    //     this.title.patchValue(p.title);
    //     this.content.patchValue(p.content);
    //     this.post = p;
    //   });
    // });

  }

  onSubmit() {
        // Pull the title and content from the form, and set as the master Post
        this.post.title = this.title.value;
        this.post.content = this.content.value;

        // Send the post to the service
        alert('Post saved successfully. ')
        this.service.createPost(this.post);

        this.router.navigate(['/admin/posts'])



  }

}
