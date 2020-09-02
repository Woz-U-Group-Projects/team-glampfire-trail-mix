import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/user.service';
import { User } from '@app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  validUsername: boolean;
  validPassword: boolean;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.validUsername = true;
    this.validPassword = true;
  }

  onSubmit() {
    if (this.user.username === undefined || this.user.username === '') {
      this.validUsername = false;
      return;
    }

    if (this.user.password === undefined || this.user.password === '') {
      this.validPassword = false;
      return;
    }

    this.service.createUser(this.user).subscribe(user => {
      this.router.navigateByUrl('/login');
    });
  }

}
