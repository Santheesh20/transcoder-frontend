import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-mux',
  standalone: false,
  templateUrl: './add-mux.html',
  styleUrls: ['./add-mux.css']
})
export class AddMuxComponent {

  private location = inject(Location);

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

  goBack() {
    const me = this;
    me.location.back();
  }
}
