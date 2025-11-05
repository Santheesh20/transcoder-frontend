import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent {

  // here i used constructor  to get router so we can navigate
  constructor(private router: Router) {}

  // logout
  logout() {
    console.log('User logged out'); // a console msg
    this.router.navigate(['/auth']); // will go to the  auth page
  }
  
  
}
