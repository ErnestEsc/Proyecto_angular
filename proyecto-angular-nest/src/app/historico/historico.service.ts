import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_BASE = 'http://localhost:3000/post-list';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient) { }

  getPostList() {
    return this.http.get(URL_BASE);
  }

}
