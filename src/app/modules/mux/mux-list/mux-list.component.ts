import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { MasterDataService } from '../../../shared/services';

interface Feed {
  serviceName: string;
  lcn: number;
  inputIp: string;
  inputPort: number;
  preset: string;
  status: string;
}

@Component({
  selector: 'app-mux-list',
  standalone: false,
  templateUrl: './mux-list.component.html',
  styleUrls: ['./mux-list.component.css'],
})
export class MuxListComponent implements OnInit {

  masterData = inject(MasterDataService);

  // search
  searchTerm = signal('');

  // data list
  muxFeeds = signal<Feed[]>([
    { serviceName: 'Movie Plus', lcn: 189, inputIp: '239.7.48.135', inputPort: 8054, preset: 'MAX-H.264-HEVC-SD', status: 'Error' },
    { serviceName: 'MKH News', lcn: 368, inputIp: '239.7.48.135', inputPort: 8134, preset: 'MAX-H.264-HEVC-SD', status: 'Error' },
    { serviceName: 'Verdant SamacharPlus', lcn: 8190, inputIp: '239.7.48.135', inputPort: 8014, preset: 'MAX-H.264-HEVC-SD', status: 'Error' }
  ]);

  filteredFeeds = signal<Feed[]>([]);

  // counts
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
}
