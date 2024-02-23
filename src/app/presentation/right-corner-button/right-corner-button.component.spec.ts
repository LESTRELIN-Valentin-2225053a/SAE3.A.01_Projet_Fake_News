import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCornerButtonComponent } from './right-corner-button.component';

describe('RightCornerButtonComponent', () => {
  let component: RightCornerButtonComponent;
  let fixture: ComponentFixture<RightCornerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightCornerButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightCornerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
