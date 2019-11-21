import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_USERS = "http://localhost:3000/users";
const URL_REQUEST = "http://localhost:3000/requests";
@Injectable({
  providedIn: 'root'
})
export class ColegasService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(URL_USERS);
  }

  getRequests(){
    return this.http.get(URL_REQUEST);
  }
}
