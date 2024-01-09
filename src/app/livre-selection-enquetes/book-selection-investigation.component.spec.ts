import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectionInvestigationComponent } from './book-selection-investigation.component';

describe('LivreSelectionEnquetesComponent', () => {
  let component: BookSelectionInvestigationComponent;
  let fixture: ComponentFixture<BookSelectionInvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSelectionInvestigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSelectionInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
