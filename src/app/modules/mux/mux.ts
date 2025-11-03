import { Component, OnInit } from '@angular/core';
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
  searchTerm = '';
  showAddForm = false;  

  muxFeeds: Feed[] = [
    { serviceName: 'Movie Plus', lcn: 189, inputIp: '239.7.48.135', inputPort: 8054, preset: 'MAX-H.264-HEVC-SD', status: 'Error' },
    { serviceName: 'MKH News', lcn: 368, inputIp: '239.7.48.135', inputPort: 8134, preset: 'MAX-H.264-HEVC-SD', status: 'Error' },
    { serviceName: 'Verdant SamacharPlus', lcn: 8190, inputIp: '239.7.48.135', inputPort: 8014, preset: 'MAX-H.264-HEVC-SD', status: 'Error' }
  ];

  filteredFeeds: Feed[] = [];

  upCount = 0;
  downCount = 0;
  progressCount = 0;
  errorCount = 0;

  ngOnInit() {
    this.filteredFeeds = [...this.muxFeeds];
    this.updateStatusCounts();
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredFeeds = this.muxFeeds.filter(feed =>
      feed.serviceName.toLowerCase().includes(term)
    );
    this.updateStatusCounts();
  }

  updateStatusCounts() {
    this.upCount = this.filteredFeeds.filter(f => f.status === 'Success').length;
    this.downCount = this.filteredFeeds.filter(f => f.status === 'Down').length;
    this.progressCount = this.filteredFeeds.filter(f => f.status === 'Progress').length;
    this.errorCount = this.filteredFeeds.filter(f => f.status === 'Error').length;
  }

  onEdit(feed: Feed) {
    console.log('Edit:', feed);
  }

  onDelete(feed: Feed) {
    console.log('Delete:', feed);
  }

  
  openAddForm() {
    this.showAddForm = true;
  }

  closeAddForm() {
    this.showAddForm = false;
  }

 
  addMuxFeed(newFeed: any) {
    
    this.muxFeeds.push({
      serviceName: newFeed.serviceName,
      lcn: this.muxFeeds.length + 1, 
      inputIp: newFeed.inputIp,
      inputPort: Number(newFeed.inputPort),
      preset: newFeed.preset,
      status: 'Progress', 
    });

    this.applyFilter(); 
    this.closeAddForm();
  }
}
