import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCheckComponent } from './feed-check.component';

describe('FeedCheckComponent', () => {
  let component: FeedCheckComponent;
  let fixture: ComponentFixture<FeedCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
