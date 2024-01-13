import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralComponent } from './MenuLateralComponent.component';

describe('JtestComponent', () => {
  let component: MenuLateralComponent;
  let fixture: ComponentFixture<MenuLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize menuOpen to false', () => {
    expect(component.menuOpen).toBe(false);
  });

  it('should toggle menuOpen and update body class', () => {
    const bodyElement = document.createElement('div');
    spyOn(document, 'querySelector').and.returnValue(bodyElement);

    component.toggleMenu();
    expect(component.menuOpen).toBe(true);
    expect(bodyElement.classList.contains('menu-open')).toBe(true);

    component.toggleMenu();
    expect(component.menuOpen).toBe(false);
    expect(bodyElement.classList.contains('menu-open')).toBe(false);
  });

  it('should emit contentToggled event', () => {
    let emitted = false;
    component.contentToggled.subscribe(() => {
      emitted = true;
    });

    component.toggleContent();
    expect(emitted).toBe(true);
  });
});

