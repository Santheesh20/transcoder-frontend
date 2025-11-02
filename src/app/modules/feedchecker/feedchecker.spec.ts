import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedchecker } from './feedchecker';

describe('Feedchecker', () => {
  let component: Feedchecker;
  let fixture: ComponentFixture<Feedchecker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feedchecker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feedchecker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
