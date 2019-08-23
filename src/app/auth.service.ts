import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const API_LINK = 'http://localhost:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(user) {
    return this.http.post(API_LINK, user);
  }
}
