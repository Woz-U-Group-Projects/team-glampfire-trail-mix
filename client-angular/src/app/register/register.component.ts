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

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.user = new User();

    // check to see if any user has been registered
    this.service.isRegistered().subscribe(registered => {
      if (registered.status) {
        this.router.navigateByUrl('/login?returnUrl=%2Fadmin');
      }
    });

  }

  onSubmit() {
    this.service.createUser(this.user).subscribe(user => {
      this.router.navigateByUrl('/login?returnUrl=%2Fadmin');
    });
  }

}
