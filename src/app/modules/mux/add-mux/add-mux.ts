import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mux',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-mux.html',
  styleUrls: ['./add-mux.css']
})
export class AddMuxComponent {

  constructor(private router: Router) {}

  formData = {
    serviceName: '',
    inputIp: '',
    inputPort: '',
    preset: '',
    gpu: '',
    encryption: false,
    pidMapping: false,
    bitrateType: 'CBR',
    bitrate: '',
    programId: ''
  };

  onSubmit() {
    
  }

  onCancel() {
    this.router.navigate(['/mux']);
  }
}
