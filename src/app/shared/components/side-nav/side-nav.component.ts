import { Component, inject } from '@angular/core';
import { MasterDataService } from '../../services';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  masterData = inject(MasterDataService);
}
