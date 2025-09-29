import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../service/userAuthentication/user-authentication.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() username: string = 'User';
  dropdownOpen = false;
  mobileMenuOpen = false;

  constructor(
    private router: Router,
    private userAuthenticationService: UserAuthenticationService
  ) {}

  get usernameInitial(): string {
    return this.username.charAt(0).toUpperCase();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  logout() {
    this.userAuthenticationService.logout();
  }
}
