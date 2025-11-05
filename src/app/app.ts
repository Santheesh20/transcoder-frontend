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

  // here i created a signal to handle the sidebar collapsed state
  isCollapsed = signal(false);

  //here  this signal will store the current route url
  currentRoute = signal('');

  // route starts with auth
  isAuthRoute = computed(() => this.currentRoute().startsWith('/auth'));

  constructor(private router: Router) {
    // this effect runs whenever isCollapsed value changes
    effect(() => {
      console.log('Sidebar collapsed state:', this.isCollapsed());
    });

    
    this.router.events.subscribe((event) => {
      // when navigation is finished, we update currentRoute value
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(event.urlAfterRedirects);
      }
    });
  }

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }
  logout() {
    console.log('User logged out');
    this.router.navigate(['/auth/login']);
  }
  
}
