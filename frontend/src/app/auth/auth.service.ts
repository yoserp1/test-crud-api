import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Login } from '../shared/models/login.model';
import { Usuario } from '../shared/models/usuario.model';

const apiUlr = environment.apiUlr;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = apiUlr + '/api';

  constructor(
    private http: HttpClient
  ) { }

  login(login: Login): Observable<any> {
    return this.http.post<any>(this.endpoint + '/login', login);
  }

  registro(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.endpoint + '/register', usuario);
  }

  perfil(): Observable<any> {
    return this.http.get(this.endpoint + '/profile');
  }

  actualizar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.endpoint + '/update', usuario);
  }
}
