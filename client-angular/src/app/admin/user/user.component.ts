import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '@app/services/user.service';
import { User } from '@app/models/user';
import {AuthenticationService} from '@app/services';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  username = '';

  constructor(private service: UserService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.username = this.user.username;
  }

  onSubmit() {
    this.service.updateUser(this.username, this.user).subscribe(user => {
      this.user = user;
      alert('Login information is saved.');
      this.router.navigateByUrl('/admin/posts').then();
    });
  }

}
