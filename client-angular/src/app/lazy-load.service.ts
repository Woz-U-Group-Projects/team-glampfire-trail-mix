import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadService {

  constructor() { }

  public loadExternalStyles(styleUrl: string) {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.href = styleUrl;
      styleElement.rel = 'stylesheet';
      styleElement.onload = resolve;
      document.head.appendChild(styleElement);
    });
  }

  public loadExternalScripts(scriptUrl: string) {
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

}
