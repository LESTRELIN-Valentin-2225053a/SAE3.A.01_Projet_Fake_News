import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardWithMediasComponent } from './board-with-medias.component';

describe('BoardWithMediasComponent', () => {
  let component: BoardWithMediasComponent;
  let fixture: ComponentFixture<BoardWithMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardWithMediasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardWithMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
