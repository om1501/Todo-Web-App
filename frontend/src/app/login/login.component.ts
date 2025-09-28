import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../service/Register/register.service';
import { UserLoginService } from '../service/userlogin/user-login.service';
import { UserAuthenticationService } from '../service/userAuthentication/user-authentication.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  user!: Login;
  constructor(
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private authenticate: UserAuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    this.user = new Login(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    this.userLoginService
      .userLogin(this.loginForm.value.username, this.user)
      .subscribe({
        next: (res) => {
          this.authenticate.authenticate(res, this.loginForm.value.username);
        },
        error: (err) => console.log(err),
      });
  }
}
