import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/settings';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.css']
})
export class BlogLayoutComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  settings: Settings = new Settings();
  m = 'm12';

  getSettings() {
    this.settingsService.getSettings().subscribe(setttings => {
      this.settings = setttings;

      if (this.settings.license && this.settings.poweredBy) {
        this.m = 'm4';
      } else if (this.settings.license || this.settings.poweredBy) {
        this.m = 'm6';
      }

    });
  }

  ngOnInit() {
    this.getSettings();
  }

}
