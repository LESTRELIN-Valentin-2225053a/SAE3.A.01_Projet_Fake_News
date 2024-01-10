import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaOnBoardComponent } from './media-on-board.component';

describe('MediaOnBoardComponent', () => {
  let component: MediaOnBoardComponent;
  let fixture: ComponentFixture<MediaOnBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaOnBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaOnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
