import {Component, OnInit} from '@angular/core';
import {ProfileService} from '@app/services/profile.service';
import {SettingsService} from '@app/services/settings.service';
import {Settings} from '@app/models/settings';

@Component({
    selector: 'app-blog-layout',
    templateUrl: './blog-layout.component.html',
    styleUrls: ['./blog-layout.component.css']
})
export class BlogLayoutComponent implements OnInit {

    constructor(private settingsService: SettingsService, private profileService: ProfileService) {
    }

    settings: Settings = new Settings();
    m = 'm12';
    year = 2020;
    name = '';

    getName() {
        this.profileService.readProfile().subscribe(profile => {
            this.name = profile.firstName + ' ' + profile.lastName;
        });
    }

    getSettings() {
        this.settingsService.getSettings().subscribe(settings => {
            this.settings = settings;

            let count = 0;

            if (this.settings.copyright) {
                count += 1;
            }

            if (this.settings.license) {
                count += 1;
            }

            if (this.settings.poweredBy) {
                count += 1;
            }

            if (count === 0) {
                count = 1;
            }

            this.m = 'm' + (12 / count);
        });
    }

    ngOnInit() {
        this.year = new Date().getFullYear();
        this.getName();
        this.getSettings();
    }

}
