import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({ providedIn: 'root' })
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private singlePostUrl = 'https://jsonplaceholder.typicode.com/posts/:id';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(this.singlePostUrl + postId);
  }
}
