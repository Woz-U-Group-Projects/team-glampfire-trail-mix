import {Component, OnInit} from '@angular/core';
import {SettingsService} from '@app/services/settings.service';
import {Settings} from '@app/models/settings';
import {Router} from '@angular/router';

import {AuthenticationService} from '@app/services';
import {User} from '@app/models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    currentUser: User;
    settings: Settings;

    constructor(
        private settingsService: SettingsService,
        private router: Router,
        private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']).then();
    }

    // private loadExternalScript(id: string, scriptURL: string): Promise<any> {
    //   return new Promise(resolve => {
    //     const scriptElement = document.createElement('script');
    //     const oldScript = document.getElementById(id);
    //     scriptElement.id = id;
    //     scriptElement.src = scriptURL;
    //     scriptElement.onload = resolve;
    //     if (oldScript) {
    //       document.body.removeChild(oldScript);
    //     }
    //     console.log('Loading external script: ' + id);
    //     document.body.appendChild(scriptElement);
    //   });
    // }

    loadExternalStyles(id: string, styleUrl: string, force: boolean = false): Promise<any> {
        return new Promise(resolve => {
            const oldStyle = document.getElementById(id);
            if (oldStyle && !force) { return; }
            const styleElement = document.createElement('link');
            styleElement.id = id;
            styleElement.href = styleUrl;
            styleElement.rel = 'stylesheet';
            styleElement.type = 'text/css';
            styleElement.onload = resolve;
            if (oldStyle) {
                document.head.removeChild(oldStyle);
            }
            console.log('Loading external style: ' + id);
            document.head.appendChild(styleElement);
        });
    }

    changeTitle(title: string): Promise<any> {
        return new Promise<any>(() => {
            const docHead = document.head || document.getElementsByTagName('head')[0];
            const element = document.createElement('title');
            const oldTitle = document.getElementById('dynamic-title');
            element.id = 'dynamic-title';
            element.text = title;
            if (oldTitle) {
                docHead.removeChild(oldTitle);
            }
            console.log('Changing web page title');
            docHead.appendChild(element);
        });
    }

    changeFavicon(src: string): Promise<any> {
        return new Promise<any>(() => {
            const docHead = document.head || document.getElementsByTagName('head')[0];
            const link = document.createElement('link');
            const oldLink = document.getElementById('dynamic-favicon');
            link.id = 'dynamic-favicon';
            link.rel = 'shortcut icon';
            link.type = 'image/x-icon';
            link.href = src;
            if (oldLink) {
                docHead.removeChild(oldLink);
            }
            console.log('Changing favicon');
            docHead.appendChild(link);
        });
    }

    getSettings() {
        this.settingsService.getSettings().subscribe(settings => {
            this.settings = settings;
            this.loadExternalStyles('theme', this.settings.theme).then(() => {
                console.log('Style theme loaded');
            });
            this.changeTitle(this.settings.headTitle).then(() => {
                console.log('Title changed');
            });
            this.changeFavicon(this.settings.favicon).then(() => {
                console.log('Favicon changed');
            });
        });
    }

    ngOnInit(): void {
        this.getSettings();
    }

}
