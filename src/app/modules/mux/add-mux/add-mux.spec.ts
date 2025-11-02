import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMux } from './add-mux';

describe('AddMux', () => {
  let component: AddMux;
  let fixture: ComponentFixture<AddMux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMux);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
