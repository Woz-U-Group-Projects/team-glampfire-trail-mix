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

  constructor(private settingsService: SettingsService, private lazyload: LazyLoadService) {}

  getSettings() {
    this.settingsService.getSettings().subscribe(setttings => {
      this.settings = setttings;
      this.lazyload.loadExternalStyles(this.settings.theme);
    });
  }

  ngOnInit(): void {
    this.getSettings();
  }
}

