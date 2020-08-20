import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@app/settings.service';
import { LazyLoadService } from '@app/lazy-load.service';
import { Settings } from '@app/models/settings';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/_services';
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
    private lazyload: LazyLoadService,
    private router: Router,
    private authenticationService: AuthenticationService




  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);



  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


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

