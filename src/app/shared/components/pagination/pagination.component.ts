import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  _ = _;
  @Input() start: number = 0;
  @Input() limit: number = 15;
  @Input() totalCount!: number;
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  pages: number[] = [];
  activePage: number = 1;
  recordsPerPage: number = 15;

  ngOnInit() {
    this.recordsPerPage = this.limit;
    if (this.totalCount > 0) {
      this.calculate(true);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalCount'] || changes['start'] || changes['limit']) {
      this.recordsPerPage = this.limit;
      this.calculate(false);
    }
  }

  private calculate(emitFirst: boolean) {
    const pageCount = this.getPageCount();
    this.pages = this.getArrayOfPage(pageCount);
    this.activePage = Math.floor((this.start) / this.recordsPerPage) + 1;
    if (emitFirst) {
      this.emitPageChange();
    }
  }

  private getPageCount(): number {
    return this.totalCount > 0 && this.recordsPerPage > 0
      ? Math.ceil(this.totalCount / this.recordsPerPage)
      : 0;
  }

  private getArrayOfPage(pageCount: number): number[] {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  private emitPageChange() {
    this.onPageChange.emit({
      start: this.start,
      limit: this.recordsPerPage
    });
  }

  onClickPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {
      this.activePage = pageNumber;
      this.start = (this.activePage - 1) * this.recordsPerPage;
      this.emitPageChange();
    }
  }

  onRecordsPerPageChange() {
    this.start = 0;
    this.recordsPerPage = this.recordsPerPage || 15;
    this.calculate(true);
  }
}