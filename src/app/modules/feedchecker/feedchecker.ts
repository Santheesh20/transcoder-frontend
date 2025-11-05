import { Component, signal, computed } from '@angular/core';
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

  // using signals instead of normal variables
  mode = signal('channel');
  searchText = signal('');
  ipAddress = signal('');
  port = signal('');
  output = signal('');

  channels: string[] = ['Channel 1', 'Channel 2', 'Channel 3', 'Channel 4'];

  // filtered channels also stored in a signal
  filteredChannels = signal([...this.channels]);

  selectedChannel = signal('');
  dropdownOpen = signal(false);

  // open or close dropdown
  toggleDropdown() {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  // filter channel list based on search text
  filterChannels() {
    this.filteredChannels.set(
      this.channels.filter(channel =>
        channel.toLowerCase().includes(this.searchText().toLowerCase())
      )
    );
  }

  // set selected channel
  selectChannel(channel: string) {
    this.selectedChannel.set(channel);
    this.searchText.set(channel);
    this.dropdownOpen.set(false);
  }

  // when check button clicked
  onCheck() {
    if (this.mode() === 'channel') {
      if (this.selectedChannel()) {
        this.output.set(`Checking status for channel: ${this.selectedChannel()}`);
      } else {
        this.output.set('Please select a channel first!');
      }
    } else {
      if (this.ipAddress() && this.port()) {
        this.output.set(`Checking IP: ${this.ipAddress()} on port ${this.port()}`);
      } else {
        this.output.set('Please enter both IP address and port!');
      }
    }
  }

}
