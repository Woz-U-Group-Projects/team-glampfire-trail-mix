import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  profile: Profile = new Profile();

  constructor(private service: ProfileService) { }

  ngOnInit() {
    this.service.readProfile().subscribe(profile => { this.profile = profile; });
  }

}
