import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponse } from '../../model/register-response';
import { RegisterUser } from '../../model/register-user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(
    username: string,
    user: RegisterUser
  ): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `http://localhost:8080/api/register/${username}`,
      user
    );
  }
}
