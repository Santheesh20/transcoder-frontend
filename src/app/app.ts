import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class AppComponent {

  isCollapsed = signal(false);
  currentRoute = signal('');
  isAuthRoute = computed(() => this.currentRoute().startsWith('/auth'));

  showUserMenu = signal(false);
  usernameInitial = 'A';

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(event.urlAfterRedirects);
      }
    });
  }

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  toggleUserMenu() {
    this.showUserMenu.set(!this.showUserMenu());
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.router.navigate(['/auth/login']);
  }
}
