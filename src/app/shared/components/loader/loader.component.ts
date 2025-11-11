import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MasterDataService } from '../../services';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements AfterViewChecked {
  loading: boolean = false;
  constructor(
    public masterData: MasterDataService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewChecked() {
    const me = this;
    me.masterData.isLoading.subscribe((val) => {
      me.loading = val;
      me.cdRef.detectChanges();
    });
  }
}
