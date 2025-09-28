import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../model/login';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  constructor(private http: HttpClient) {}

  userLogin(username: string, user: Login) {
    return this.http.post<boolean>(
      `http://localhost:8080/api/register/${username}`,
      user
    );
  }
}
