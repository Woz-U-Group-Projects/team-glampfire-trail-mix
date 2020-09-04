import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { Settings } from '../models/settings';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  settings: Settings = new Settings();

  constructor(private settingsService: SettingsService) { }

  getSettings() {
    this.settingsService.getSettings().subscribe(setttings => {
      this.settings = setttings;
    });
  }


ngOnInit() {
  this.getSettings();
}

}
