import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreSelectionEnquetesComponent } from './livre-selection-enquetes.component';

describe('LivreSelectionEnquetesComponent', () => {
  let component: LivreSelectionEnquetesComponent;
  let fixture: ComponentFixture<LivreSelectionEnquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreSelectionEnquetesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivreSelectionEnquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
