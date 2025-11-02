import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-mux',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-mux.html',
  styleUrls: ['./add-mux.css']
})
export class AddMuxComponent {

  @Output() close = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<any>();

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
    this.submitForm.emit(this.formData);
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }

}
