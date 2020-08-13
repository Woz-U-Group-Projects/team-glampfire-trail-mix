import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { Settings } from './models/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}
  settings: Settings;

  getSettings() {
    this.settingsService.getSettings().subscribe(setttings => (this.settings = setttings));
  }

  ngOnInit(): void {
    this.getSettings();
  }
}
