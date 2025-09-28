import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { RegisterService } from '../service/Register/register.service';
import { RegisterUser } from '../model/register-user';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const reEnterPassword = control.get('reEnterPassword');

    if (!password || !reEnterPassword) {
      return null;
    }

    return password.value === reEnterPassword.value
      ? null
      : { passwordMismatch: true };
  };
}

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  user!: RegisterUser;
  message!: string;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        reEnterPassword: ['', Validators.required],
      },
      { validators: passwordMatchValidator() }
    );
  }

  submitRegister() {
    this.user = new RegisterUser(
      this.registerForm.value.username,
      this.registerForm.value.email,
      this.registerForm.value.password
    );
    this.registerService
      .registerUser(this.registerForm.value.username, this.user)
      .subscribe({
        next: (res) => (this.message = res.message),
        error: (err) => (this.message = err.message),
      });
  }
}
