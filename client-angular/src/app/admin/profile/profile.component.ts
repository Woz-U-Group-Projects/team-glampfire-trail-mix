import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from '@app/services/profile.service';
import {Profile} from '@app/models/profile';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: Profile = new Profile();
    languages = '';

    constructor(private router: Router, private service: ProfileService) {
    }

    ngOnInit() {
        this.service.readProfile().subscribe(profile => {
            if (profile) {
                this.profile = profile;

                if (this.profile.languages) {
                    this.languages = this.profile.languages.join(', ');
                }
            }
        });
    }

    onSubmit() {
        this.profile.languages = this.languages.split(/, */);
        if (this.profile.languages[0].length === 0) {
            this.profile.languages = null;
        }

        this.service.updateProfile(this.profile).subscribe(() => {
            alert('Saved profile');
            this.router.navigateByUrl('/admin/posts').then();
        });
    }

}
