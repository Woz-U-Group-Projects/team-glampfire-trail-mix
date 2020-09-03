import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user.service';
import { User } from '@app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  submitted = false;

  constructor(private service: UserService) { }

  getUser() {
    this.service.readUser().subscribe(user => { this.user = user; });
  }

  ngOnInit() {
    this.getUser();
  }

  onSubmit() {
    this.service.updateUser(this.user).subscribe(user => {
      this.user = user;
      this.submitted = true;
    });
  }

}
