import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateInscriptionComponent } from './validate-inscription.component';

describe('ValidateInscriptionComponent', () => {
  let component: ValidateInscriptionComponent;
  let fixture: ComponentFixture<ValidateInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateInscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
