import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plat } from '../models/plat.model';
const baseUrl = 'https://m1p9mean-lukas.herokuapp.com/api/plats';
@Injectable({
  providedIn: 'root'
})
export class PlatService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Plat[]> {
    return this.http.get<Plat[]>(baseUrl);
  }
  get(id: any): Observable<Plat> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByNom(nom: any): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${baseUrl}?nom=${nom}`);
  }
}
