import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { LazyLoadService } from './lazy-load.service';
import { Settings } from './models/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  settings: Settings;

  constructor(private settingsService: SettingsService, private lazyload: LazyLoadService) { }

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

  getSettings() {
    this.settingsService.getSettings().subscribe(setttings => {
      this.settings = setttings;
      this.lazyload.loadExternalStyles(this.settings.theme);
      this.changeTitle(this.settings.headTitle);
      this.changeFavicon(this.settings.favicon);
    });
  }

  ngOnInit(): void {
    this.getSettings();
  }
}
