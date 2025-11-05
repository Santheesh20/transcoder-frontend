import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more.html',
  styleUrls: ['./more.css']
})
export class MoreComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
