import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access route params here
    this.username = this.route.snapshot.paramMap.get('username') || '';
  }
}
