import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  api = this.settings.BASE_URL + 'posts';

  constructor(private http: HttpClient, private settings: SettingsService) { }

  readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api);
  }

  readPost(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.api}/${postId}`);
  }

  deletePost(postId: number): Observable<Post> {
    this.http.delete(`${this.api}/${postId}`).subscribe(data => {
      console.log("Removed post");
    });

    return null;
  }
}
