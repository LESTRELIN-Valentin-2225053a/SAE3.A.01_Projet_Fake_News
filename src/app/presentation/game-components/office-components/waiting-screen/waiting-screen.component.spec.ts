import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaintingScreenComponent } from './waiting-screen.component';

describe('WaintingScreenComponent', () => {
  let component: WaintingScreenComponent;
  let fixture: ComponentFixture<WaintingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaintingScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaintingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
