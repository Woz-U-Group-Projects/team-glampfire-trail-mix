import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '@app/services/settings.service';
import {Settings} from '@app/models/settings';
import {AppComponent} from '@app/app.component';
import {environment} from '@environments/environment';
import {Theme, Themes} from '@app/models/theme';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    settings: Settings = new Settings();
    themes: Theme[] = Themes;

    constructor(private service: SettingsService, private router: Router, private app: AppComponent) {
    }

    getSettings() {
        this.service.getSettings().subscribe(settings => {
            this.settings = settings;
        });
    }


    ngOnInit() {
        this.getSettings();
        this.app.loadExternalStyles('FontAwesome', environment.fontawesomeUrl).then();
    }

    onSubmit() {
        this.service.putSettings(this.settings).subscribe(settings => {
            this.settings = settings;
            alert('The settings are saved.');
            this.app.loadExternalStyles('theme', this.settings.theme, true).then(() => {
                console.log('Theme reloaded');
            });
            this.app.changeTitle(this.settings.headTitle).then(() => {
                console.log('Web page title reloaded');
            });
            this.app.changeFavicon(this.settings.favicon).then(() => {
                console.log('Favicon reloaded');
            });
            this.router.navigateByUrl('/admin/posts').then();
        });
    }

    changeThemeValue() {
        const uri = document.forms[0].themeValue.value;
        document.forms[0].theme.value = uri;
        this.settings.theme = uri;
    }

}
