import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@app/services/settings.service';
import { Settings } from '@app/models/settings';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  constructor(private service: SettingsService, private router: Router, private app: AppComponent) { }

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
      this.app.changeTheme(this.settings.theme);
      this.app.changeTitle(this.settings.headTitle);
      this.app.changeFavicon(this.settings.favicon);
      this.router.navigateByUrl('/admin').then();
    });
  }

}
