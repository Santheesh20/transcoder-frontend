import { Component, OnInit, inject } from '@angular/core';
import { AuthService, MasterDataService } from '../../../shared/services';
declare var $: any;

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user: any;

  private authService = inject(AuthService);
  masterData = inject(MasterDataService);

  ngOnInit() {}

  toggle() {
    $('#sidebar, #content').toggleClass('active');
  }

  async logout() {
    const me = this;
    try {
      me.authService.doLogout();
    } catch (err) {
      me.authService.doLogout();
    }
  }
}
