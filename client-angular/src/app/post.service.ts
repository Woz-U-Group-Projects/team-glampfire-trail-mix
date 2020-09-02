import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './models/post';
import { Observable, Subscriber } from 'rxjs';
import { SettingsService } from './settings.service';

const headers = new HttpHeaders().set('Content-Type', 'application/json');


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
      console.log('Removed post');
    });

    return null;
  }

  updatePost(post: Post): void {
    console.log('Updating post ' + post.id)
    // Update the post on the backend
    this.http.put<Post>(`${this.api}/${post.id}`, post, { headers }).subscribe(
      val => {
        console.log('Post ' + post.id + ' updated\n',
          val);
      },
      response => {
        console.log('An error message has occurred in PUT: ', response);
      }
    );

  }

  createPost(post: Post): void {
    console.log('Creating post ' + post.id);
    this.http.post<Post>(`${this.api}`, post, { headers }).subscribe(
      val => {
        console.log('Post ' + post.id + ' updated\n',
          val);
      },
      response => {
        console.log('An error message has occurred in POST: ', response);
      }
    );
  }
}
