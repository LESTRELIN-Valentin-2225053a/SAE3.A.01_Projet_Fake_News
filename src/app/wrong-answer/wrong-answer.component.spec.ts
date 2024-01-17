import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAnswerComponent } from './wrong-answer.component';

describe('WrongAnswerComponent', () => {
  let component: WrongAnswerComponent;
  let fixture: ComponentFixture<WrongAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrongAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
