import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCornerButtonComponent } from './left-corner-button.component';

describe('LeftCornerButtonComponent', () => {
  let component: LeftCornerButtonComponent;
  let fixture: ComponentFixture<LeftCornerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftCornerButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftCornerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
