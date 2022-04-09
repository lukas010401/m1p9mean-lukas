import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'https://m1p9mean-lukas.herokuapp.com/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(nom: string, mdp: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      nom,
      mdp
    }, httpOptions);
  }
  register(nom: string, email: string, mdp: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      nom,
      email,
      mdp
    }, httpOptions);
  }
}
