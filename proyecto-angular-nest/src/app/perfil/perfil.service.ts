import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

const URL_BASE = 'http://localhost:3000/user-info';

@Injectable()
export class PerfilService {
    constructor (private http: HttpClient) {}

    getPerfil() {
        return this.http.get(URL_BASE);
    }

    updatePerfil(perfil: User): Observable<User> {
        return this.http.put<User>(URL_BASE, perfil);
    }
}