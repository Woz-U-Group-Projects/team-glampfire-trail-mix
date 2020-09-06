import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '@app/services/post.service';
import {Post} from '@app/models/post';
import {QuillService} from '@app/services/quill.service';

import Quill from 'quill';
import * as QuillBlotFormatter from 'quill-blot-formatter';
Quill.register('models/blotFormatter', QuillBlotFormatter.default);

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
    post = new Post();
    quill: Quill;

    constructor(private service: PostService, private route: ActivatedRoute, private router: Router, private quillService: QuillService) {
    }

    ngOnInit() {
        this.quill = new Quill(document.getElementById('post-editor'), this.quillService.getOptions());
    }

    onSubmit() {
        this.post.content = document.getElementsByClassName('ql-editor')[0].innerHTML;

        // Send the post to the service
        alert('Post saved successfully.');
        this.service.createPost(this.post);

        this.router.navigate(['/admin/posts']).then();
    }

}
