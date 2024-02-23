import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu.component';

describe('JtestComponent', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize isContentVisible to false', () => {
    expect(component.isContentVisible).toBeFalsy();
  });

  it('should toggle content visibility', () => {
    component.toggleContent();
    expect(component.isContentVisible).toBe(true);

    component.toggleContent();
    expect(component.isContentVisible).toBe(false);
  });

  it('should handle content toggled event', () => {
    component.onContentToggled();
    expect(component.isContentVisible).toBe(true);

    component.onContentToggled();
    expect(component.isContentVisible).toBe(false);
  });
});

