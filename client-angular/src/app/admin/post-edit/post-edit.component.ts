import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@app/services/post.service';
import { Post } from '@app/models/post';

import Quill from 'Quill';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  quill: Quill;

  // Represent the post with an object
  post = new Post();
  // // Create the form
  // editorForm = this.fb.group({
  //   title: ['', [Validators.required]]
  // });
  // // Represent the form controls with objects
  // title = new FormControl('');
  // content = new FormControl('');

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    // this.quill = new Quill(document.getElementById('post-editor'), { theme: 'snow' });
    // this.editorForm = new FormGroup(
    //   { editor: new FormControl(null),
    //   title: new FormControl(null) }
    // );
    // Pull the post from the current route
    this.route.paramMap.subscribe(params => {
      this.service.readPost(params.get('id')).subscribe(p => {
        const container = document.getElementById('post-editor');

        const options = {
          theme: 'snow'
        };

        container.innerHTML = p.content;
        this.quill = new Quill(container, options);

        // this.title.patchValue(p.title);
        // this.content.patchValue(p.content);
        this.post = p;
      });
    });


  }

  onSubmit() {

    // // Pull the title and content from the form, and set as the master Post
    // this.post.title = this.title.value;
    // this.post.content = this.content.value;
    this.post.content = document.getElementsByClassName('ql-editor')[0].innerHTML;

    // Send the post to the service
    alert('Post saved successfully.');
    this.service.updatePost(this.post);

    this.router.navigate(['/admin/posts']).then();
  }

}
