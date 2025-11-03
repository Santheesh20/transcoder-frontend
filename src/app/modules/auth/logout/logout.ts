import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-logout',
  template: `
    <div class="logout-message">
      <h2>You have been logged out</h2>
      <button (click)="goToLogin()">Login Again</button>
    </div>
  `,
  styleUrls: ['./logout.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
