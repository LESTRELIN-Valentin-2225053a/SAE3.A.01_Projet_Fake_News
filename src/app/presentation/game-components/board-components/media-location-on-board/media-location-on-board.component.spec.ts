import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLocationOnBoardComponent } from './media-location-on-board.component';

describe('MediaLocationOnBoardComponent', () => {
  let component: MediaLocationOnBoardComponent;
  let fixture: ComponentFixture<MediaLocationOnBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaLocationOnBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaLocationOnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
