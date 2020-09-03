import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@app/services/settings.service';
import { Settings } from '@app/models/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  constructor(private service: SettingsService, private router: Router) { }

  getSettings() {
    this.service.getSettings().subscribe(settings => {
      this.settings = settings;
    });
  }


  ngOnInit() {
    this.getSettings();
  }

  onSubmit() {
    this.service.putSettings(this.settings).subscribe(settings => {
      this.settings = settings;
      alert('The settings are saved.');
      this.router.navigateByUrl('/admin').then();
    });
  }

}
