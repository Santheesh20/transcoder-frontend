import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUX } from './mux';

describe('MUX', () => {
  let component: MUX;
  let fixture: ComponentFixture<MUX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MUX]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MUX);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
