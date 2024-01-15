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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the first investigation on the first page', () => {
    expect(component.page).toEqual(1);
    expect(component.currentInvestigationOnPage).toEqual(component.investigationList[0]);
  });

  it('should increase the page and update the current investigation', () => {
    component.increasePage();
    expect(component.page).toEqual(3); // Assuming that the investigationList has 3 investigations
    expect(component.currentInvestigationOnPage).toEqual(component.investigationList[1]);
  });

  it('should decrease the page and update the current investigation', () => {
    // Assume we're already on a page other than the first
    component.decreasePage();
    expect(component.page).toEqual(1);
    expect(component.currentInvestigationOnPage).toEqual(component.investigationList[0]);
  });

  it('should start an investigation when selected', () => {
    component.selectInvestigation();
    expect(component.isConductingInvestigation).toBeTruthy();
  });

  it('should validate a correct response and update the investigation state', () => {
    component.isCorrect = true;
    component.validateResponse();
    expect(component.currentInvestigationOnPage.success).toBeTruthy();
    expect(component.correctionMessage).toEqual("Bravo vous avez réussi l'enquete!");
    expect(component.isConductingInvestigation).toBeFalsy();
  });

  it('should validate an incorrect response and display a retry message', () => {
    component.isCorrect = false;
    component.validateResponse();
    expect(component.correctionMessage).toEqual("Recommence!");
  });

  it('should abandon an ongoing investigation and reset investigation states', () => {
    component.abandonInvestigation();
    expect(component.isConductingInvestigation).toBeFalsy();
  });
});
