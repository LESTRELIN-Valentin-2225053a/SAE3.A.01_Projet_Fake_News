import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailInvestigationComponent } from './book-detail-investigation.component';

describe('BookDetailInvestigationComponent', () => {
  let component: BookDetailInvestigationComponent;
  let fixture: ComponentFixture<BookDetailInvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailInvestigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDetailInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
