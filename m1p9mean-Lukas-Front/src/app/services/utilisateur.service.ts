import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
const API_URL = 'https://m1p9mean-lukas.herokuapp.com/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private token : TokenStorageService) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getClientBoard(): Observable<any> {
    return this.http.get(API_URL + 'client', { responseType: 'text' });
  }
  getRestaurantBoard(): Observable<any> {
    return this.http.get(API_URL + 'restaurant', { responseType: 'text' });
  }
  getLivreurBoard(): Observable<any> {
    return this.http.get(API_URL + 'livreur', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    let token = this.token.getUser().accessToken;
    let headers = new HttpHeaders().set("x-access-token", token);
    console.log("headersssss :" + headers);
    return this.http.get(API_URL + 'admin', { responseType: 'text', headers : headers });
  }
}
