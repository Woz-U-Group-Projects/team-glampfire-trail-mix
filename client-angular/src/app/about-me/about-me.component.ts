import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';
import { AppComponent } from '@app/app.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  profile: Profile = new Profile();

  constructor(private service: ProfileService, private app: AppComponent) { }

  ngOnInit() {
    this.service.readProfile().subscribe(profile => { this.profile = profile; });
    this.app.loadExternalStyles('FontAwesome', environment.fontawesomeUrl).then();
  }

}
