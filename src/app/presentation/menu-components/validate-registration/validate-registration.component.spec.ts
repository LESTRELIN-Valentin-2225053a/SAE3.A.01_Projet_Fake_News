import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateRegistrationComponent } from './validate-registration.component';

describe('ValidateRegistrationComponent', () => {
  let component: ValidateRegistrationComponent;
  let fixture: ComponentFixture<ValidateRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
