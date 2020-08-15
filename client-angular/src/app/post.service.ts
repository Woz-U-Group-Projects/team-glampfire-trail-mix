import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  api = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) { }

  readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api);
  }

  readPost(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.api}/${postId}`);
  }
}
