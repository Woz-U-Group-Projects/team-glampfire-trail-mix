import {Component, OnInit} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {environment} from '@environments/environment';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

    constructor(private app: AppComponent, private router: Router) {
    }

    ngOnInit() {
        this.app.loadExternalStyles('FontAwesome', environment.fontawesomeUrl).then();
        this.router.navigate(['/admin/posts']).then();
    }

}
