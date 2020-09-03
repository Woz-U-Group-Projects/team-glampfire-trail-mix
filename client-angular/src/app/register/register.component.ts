import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.service';
import { User } from '@app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  returnUrl = '/login?returnUrl=%2Fadmin';

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.user = new User();

    // check to see if any user has been registered
    this.service.isRegistered().subscribe(registered => {
      if (registered.status) {
        this.router.navigateByUrl(this.returnUrl).then();
      }
    });

  }

  onSubmit() {
    this.service.createUser(this.user).subscribe(user => {
      this.router.navigateByUrl(this.returnUrl).then();
    });
  }

}
