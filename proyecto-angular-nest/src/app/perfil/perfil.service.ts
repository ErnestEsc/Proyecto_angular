import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE = 'http://localhost:3000/user-info';

@Injectable()
export class PerfilService {
    constructor (private http: HttpClient) {}

    getPerfil() {
        return this.http.get(URL_BASE);
    }
}