import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '@app/services/user.service';
import { User } from '@app/models/user';

@Component({
  selector: 'admin-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private service: UserService, private router: Router) { }

  getUser() {
    this.service.readUser().subscribe(user => { this.user = user; });
  }

  ngOnInit() {
    this.getUser();
  }

  onSubmit() {
    this.service.updateUser(this.user).subscribe(user => {
      this.user = user;
      alert('Login information is saved.');
      this.router.navigateByUrl('/admin').then();
    });
  }

}
