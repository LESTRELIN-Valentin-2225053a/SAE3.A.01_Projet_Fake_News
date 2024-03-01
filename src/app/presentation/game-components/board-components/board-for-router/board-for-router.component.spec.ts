import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardForRouterComponent } from './board-for-router.component';

describe('BoardRouterComponent', () => {
  let component: BoardForRouterComponent;
  let fixture: ComponentFixture<BoardForRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardForRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardForRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
