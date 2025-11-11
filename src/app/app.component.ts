import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-loader></app-loader>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }