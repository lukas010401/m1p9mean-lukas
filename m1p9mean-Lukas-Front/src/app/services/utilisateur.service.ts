import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'https://m1p9mean-lukas.herokuapp.com/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }
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
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
