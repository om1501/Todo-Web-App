import { Injectable } from '@angular/core';
import { RouteGuardService } from '../routeGuard/route-guard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  authenticate(res: boolean, username: string) {
    if (res) {
      this.isLoggedIn = true; // store login state
      localStorage.setItem('isLoggedIn', 'true'); // optional persistence
      this.router.navigate(['/welcome', username]); // navigate to protected route
    }
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }
}
