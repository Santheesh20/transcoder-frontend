import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddMuxComponent } from './add-mux/add-mux';

interface Feed {
  serviceName: string;
  lcn: number;
  inputIp: string;
  inputPort: number;
  preset: string;
  status: string;
}

@Component({
  selector: 'app-mux',
  standalone: true,
  imports: [CommonModule, FormsModule, AddMuxComponent],
  templateUrl: './mux.html',
  styleUrls: ['./mux.css'],
})
export class MuxComponent implements OnInit {

  // search box value as signal
  searchTerm = signal('');

  // form visibility
  showAddForm = signal(false);

  // list of feeds stored as signal
  muxFeeds = signal<Feed[]>([
    { serviceName: 'Movie Plus', lcn: 189, inputIp: '239.7.48.135', inputPort: 8054, preset: 'MAX-H.264-HEVC-SD', status: 'Error' },
    { serviceName: 'MKH News', lcn: 368, inputIp: '239.7.48.135', inputPort: 8134, preset: 'MAX-H.264-HEVC-SD', status: 'Error' },
    { serviceName: 'Verdant SamacharPlus', lcn: 8190, inputIp: '239.7.48.135', inputPort: 8014, preset: 'MAX-H.264-HEVC-SD', status: 'Error' }
  ]);

  // filtered list based on search
  filteredFeeds = signal<Feed[]>([]);

  // computed counts update automatically when filteredFeeds updates
  upCount = computed(() => this.filteredFeeds().filter(f => f.status === 'Success').length);
  downCount = computed(() => this.filteredFeeds().filter(f => f.status === 'Down').length);
  progressCount = computed(() => this.filteredFeeds().filter(f => f.status === 'Progress').length);
  errorCount = computed(() => this.filteredFeeds().filter(f => f.status === 'Error').length);

  ngOnInit() {
    this.filteredFeeds.set([...this.muxFeeds()]);
  }

  applyFilter() {
    const term = this.searchTerm().toLowerCase();
    this.filteredFeeds.set(
      this.muxFeeds().filter(feed =>
        feed.serviceName.toLowerCase().includes(term)
      )
    );
  }

  onEdit(feed: Feed) {
    console.log('Edit:', feed);
  }

  onDelete(feed: Feed) {
    console.log('Delete:', feed);
  }

  openAddForm() {
    this.showAddForm.set(true);
  }

  closeAddForm() {
    this.showAddForm.set(false);
  }

  addMuxFeed(newFeed: any) {
    this.muxFeeds.update(list => [
      ...list,
      {
        serviceName: newFeed.serviceName,
        lcn: list.length + 1,
        inputIp: newFeed.inputIp,
        inputPort: Number(newFeed.inputPort),
        preset: newFeed.preset,
        status: 'Progress'
      }
    ]);

    this.applyFilter();
    this.closeAddForm();
  }
}
