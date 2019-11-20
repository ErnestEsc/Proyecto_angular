import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Observable } from 'rxjs';

const URL_BASE = 'http://localhost:3000/post-list';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  @Input() post: Post;

  constructor(private http: HttpClient) { }

  getPostList() {
    return this.http.get(URL_BASE);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(URL_BASE, post);
  }

}
