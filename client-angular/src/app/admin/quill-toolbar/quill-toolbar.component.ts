import {Component, Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-quill-toolbar',
  templateUrl: './quill-toolbar.component.html',
  styleUrls: ['./quill-toolbar.component.css']
})
export class QuillToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getOptions(): {} {
    return {
      modules: {
        blotFormatter: {},
        toolbar: '#quill-toolbar'
      },
      theme: 'snow'
    };
  }

}
