import { Component, OnInit } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.loadExternalStyles('FontAwesome', environment.fontawesomeUrl).then();
  }

}
