import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuxListComponent } from './mux-list.component';

describe('MUX', () => {
  let component: MuxListComponent;
  let fixture: ComponentFixture<MuxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuxListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
