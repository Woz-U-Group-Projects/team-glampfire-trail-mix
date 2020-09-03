import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@app/services/settings.service';
import { Settings } from '@app/models/settings';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/services';
import { User } from '@app/models/user';

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
    this.router.navigate(['/login']);
  }

  changeTitle(title: string) {
    const docHead = document.head || document.getElementsByTagName('head')[0];
    const element = document.createElement('title');
    const oldTitle = document.getElementById('dynamic-title');
    element.id = 'dynamic-title';
    element.text = title;
    if (oldTitle) {
      docHead.removeChild(oldTitle);
    }
    docHead.appendChild(element);
  }

  changeFavicon(src: string) {
    const docHead = document.head || document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    const oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = src;
    if (oldLink) {
      docHead.removeChild(oldLink);
    }
    docHead.appendChild(link);
  }

  changeTheme(url: string) {
    const docHead = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('link');
    const oldTheme = document.getElementById('dynamic-css-theme');
    style.id = 'dynamic-css-theme';
    style.href = url;
    style.rel = 'stylesheet';
    if (oldTheme) {
      docHead.removeChild(oldTheme);
    }
    docHead.appendChild(style);
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(settings => {
      this.settings = settings;
      this.changeTheme(this.settings.theme);
      this.changeTitle(this.settings.headTitle);
      this.changeFavicon(this.settings.favicon);
    });
  }

  ngOnInit(): void {
    this.getSettings();
  }

}
