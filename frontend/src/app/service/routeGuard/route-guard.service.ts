import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserAuthenticationService } from '../userAuthentication/user-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    private authService: UserAuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.getLoginStatus()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
