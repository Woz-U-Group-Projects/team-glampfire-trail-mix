import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '@app/services/post.service';
import {Post} from '@app/models/post';
import {AppComponent} from '@app/app.component';
import {QuillToolbarComponent} from '@app/admin/quill-toolbar/quill-toolbar.component';

import Quill from 'quill';
import * as QuillBlotFormatter from 'quill-blot-formatter';
import {environment} from '@environments/environment';
Quill.register('models/blotFormatter', QuillBlotFormatter.default);

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
    post = new Post();
    quill: Quill;

    constructor(private service: PostService,
                private route: ActivatedRoute,
                private router: Router,
                private quillToolbarComponent: QuillToolbarComponent,
                private app: AppComponent) {
    }

    ngOnInit() {
        this.app.loadExternalStyles('QuillTheme', environment.quillthemeUrl).then();
        this.quill = new Quill(document.getElementById('post-editor'), this.quillToolbarComponent.getOptions());
    }

    onSubmit() {
        this.post.content = document.getElementsByClassName('ql-editor')[0].innerHTML;

        // Send the post to the service
        alert('Post saved successfully.');
        this.service.createPost(this.post);

        this.router.navigate(['/admin/posts']).then();
    }

}
