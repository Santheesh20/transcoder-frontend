import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gpu',
  imports: [],
  templateUrl: './gpu.component.html',
  styleUrl: './gpu.component.css',
})
export class GpuComponent {
  private location = inject(Location);

  goBack() {
    const me = this;
    me.location.back();
  }
}
