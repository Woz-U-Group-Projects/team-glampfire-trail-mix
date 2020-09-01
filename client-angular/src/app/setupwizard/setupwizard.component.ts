import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/User';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-setupwizard',
  templateUrl: './setupwizard.component.html',
  styleUrls: ['./setupwizard.component.css']
})
export class SetupwizardComponent implements OnInit {

  // Represent the User with an Object

  model: User = new User();
  // create the form

  editorForm1 = this.fb.group({

  });
  // Represent the form controls with objects
  firstName = new FormControl('');
  lastName = new FormControl('');
  userName = new FormControl('');
  password = new FormControl('');
  emailAddress = new FormControl('');
  socialMedia = new FormControl('');



  // Create the form


  constructor(private service: UserService, private route: ActivatedRoute, private fb: FormBuilder ) { }

  ngOnInit() {
    this.editorForm1 = new FormGroup (
      {
        firstName: new FormControl(null),
        lastName: new FormControl(null),
        userName: new FormControl(null),
        password: new FormControl(null),
        emailAddress: new FormControl(null),
        socialMedia: new FormControl(null)



      }
    );
    //   Pull the post from the current Route
    // this.route.paramMap.subscribe(params => {
    //     this.service.readUser(params.get('id')).subscribe(p => {
    //       this.firstName.patchValue(p.firstName);
    //       this.lastName.patchValue(p.lastName);
    //       this.userName.patchValue(p.userName);
    //       this.user =  p;
    //     });


    // });

  }
  onSubmit() {

    // pull the user data from the form and sets it as the post.

    // this.user.firstName = this.firstName.value;
    // this.user.lastName = this.lastName.value;
    // this.user.userName = this.userName.value;
    // this.user.password = this.password.value;
    // this.user.emailAddress= this.emailAddress.value;
    // this.user.socialMedia = this.socialMedia.value; 

    // this.service.updateUser(this.user);

    console.log('submit Successful:', this.model);
  }

  
}
