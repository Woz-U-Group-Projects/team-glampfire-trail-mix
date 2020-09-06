import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable, Subscriber } from 'rxjs';
import { environment } from '@environments/environment';

const headers = new HttpHeaders().set('Content-Type', 'application/json');


@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = environment.apiUrl + '/posts';

  constructor(private http: HttpClient) { }

  readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  readPost(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${postId}`);
  }

  deletePost(postId: number): Observable<Post> {
    this.http.delete(`${this.apiUrl}/${postId}`).subscribe(data => {
      console.log('Removed post');
    });

    return null;
  }

  updatePost(post: Post): void {
    console.log('Updating post ' + post.id)
    // Update the post on the backend
    this.http.put<Post>(`${this.apiUrl}/${post.id}`, post, { headers }).subscribe(
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
    this.http.post<Post>(`${this.apiUrl}`, post, { headers }).subscribe(
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
