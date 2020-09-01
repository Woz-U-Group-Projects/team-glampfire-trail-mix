import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@app/settings.service';
import { Settings } from '@app/models/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;
  submitted = false;

  constructor(private service: SettingsService) { }

  getSettings() {
    this.service.getSettings().subscribe(setttings => {
      this.settings = setttings;
    });
  }


  ngOnInit() {
    this.getSettings();
  }

  onSubmit() {
    this.service.putSettings(this.settings).subscribe(settings => {
      this.settings = settings;
      this.submitted = true;
    });
  }

}
