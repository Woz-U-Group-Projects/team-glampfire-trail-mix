import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';

@Component({
  selector: 'app-setupwizard',
  templateUrl: './setupwizard.component.html',
  styleUrls: ['./setupwizard.component.css']
})
export class SetupwizardComponent implements OnInit {
  firstName: FormGroup;
  lastName: FormGroup;
  emailAddress: FormGroup;
  socialMedia: FormGroup;
  biography: FormGroup;
  userName: FormGroup;
  password: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstName = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.lastName = this._formBuilder.group({
      secondCtrl: ['',Validators.required]
    });
    this.emailAddress = this._formBuilder.group({
      thirdCtrl: ['',Validators.required]
    });
    this.socialMedia = this._formBuilder.group({
      fourthCtrl: ['',Validators.required]
    });
    this.biography = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.userName = this._formBuilder.group({
      sixthCtrl: ['',Validators.required]
    });
    this.password = this._formBuilder.group({
      seventhCtrl: ['',Validators.required]
    });
  }

}
