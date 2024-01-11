import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardWithDraggableMediasComponent } from './board-with-draggable-medias.component';

describe('BoardWithMediasComponent', () => {
  let component: BoardWithDraggableMediasComponent;
  let fixture: ComponentFixture<BoardWithDraggableMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardWithDraggableMediasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardWithDraggableMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
