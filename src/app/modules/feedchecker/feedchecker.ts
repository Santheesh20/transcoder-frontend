import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedchecker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedchecker.html',
  styleUrls: ['./feedchecker.css']
})
export class FeedcheckerComponent {
  mode: string = 'channel';
  searchText: string = '';
  ipAddress: string = '';
  port: string = '';   
  output: string = '';

  channels: string[] = ['Channel 1', 'Channel 2', 'Channel 3', 'Channel 4'];
  filteredChannels: string[] = [...this.channels];
  selectedChannel: string = '';
  dropdownOpen: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  filterChannels() {
    this.filteredChannels = this.channels.filter(channel =>
      channel.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  selectChannel(channel: string) {
    this.selectedChannel = channel;
    this.searchText = channel;
    this.dropdownOpen = false;
  }

  onCheck() {
    if (this.mode === 'channel') {
      this.output = this.selectedChannel
        ? `Checking status for channel: ${this.selectedChannel}`
        : 'Please select a channel first!';
    } else {
      this.output = this.ipAddress && this.port
        ? `Checking IP: ${this.ipAddress} on port ${this.port}`
        : 'Please enter both IP address and port!';
    }
  }
}
