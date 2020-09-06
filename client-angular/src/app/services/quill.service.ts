import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuillService {

  constructor() { }

  getOptions(): any {
    const toolbar = [
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', { script: 'sub' }, { script: 'super' }, 'clean'], // toggled buttons
      ['link', 'blockquote', 'code-block'],
      [
        { color: [] },
        { background: [] }
      ], // dropdown with defaults from theme
      [{ list: 'bullet' }, { list: 'ordered' }, { indent: '-1' }, { indent: '+1' }],
      [{ align: '' }, {align: 'center'}, {align: 'right'}, {align: 'justify'}],
      ['image', 'video'] // link and image, video
    ];

    return {
      modules: {
        blotFormatter: {},
        toolbar
      },
      theme: 'snow'
    };
  }
}
