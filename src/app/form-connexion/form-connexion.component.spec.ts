import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConnexionComponent } from './form-connexion.component';

describe('FormConnexionComponent', () => {
  let component: FormConnexionComponent;
  let fixture: ComponentFixture<FormConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormConnexionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
