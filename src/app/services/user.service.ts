import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(baseUrl);
  }

  saveUser(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getUser(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  updateUser(id, data):Observable<any> {
    return this.http.post(`${baseUrl}/${id}`, data);
  }
}
