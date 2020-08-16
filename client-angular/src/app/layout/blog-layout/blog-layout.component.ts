import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../settings.service';
import { Settings } from '../../models/settings';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.css']
})
export class BlogLayoutComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  settings: Settings;

  getSettings() {
    this.settingsService.getSettings().subscribe(setttings => (this.settings = setttings));
  }

  ngOnInit() {
    this.getSettings();
  }

}
