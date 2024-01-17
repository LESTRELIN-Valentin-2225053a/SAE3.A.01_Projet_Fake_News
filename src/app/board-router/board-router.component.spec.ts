import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRouterComponent } from './board-router.component';

describe('BoardRouterComponent', () => {
  let component: BoardRouterComponent;
  let fixture: ComponentFixture<BoardRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
