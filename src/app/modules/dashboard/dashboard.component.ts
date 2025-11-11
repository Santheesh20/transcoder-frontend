import { Component, inject } from '@angular/core';
import { MasterDataService } from '../../shared/services';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  masterData = inject(MasterDataService);
}
