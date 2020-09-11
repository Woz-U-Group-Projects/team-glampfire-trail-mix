import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';
import { Profile } from '@app/models/profile';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  profile: Profile = new Profile();

  constructor(private service: ProfileService) { }

  getSettings() {
    this.service.readProfile().subscribe(profile => {
      this.profile = profile;
    });
  }


ngOnInit() {
  this.getSettings();
}

}
