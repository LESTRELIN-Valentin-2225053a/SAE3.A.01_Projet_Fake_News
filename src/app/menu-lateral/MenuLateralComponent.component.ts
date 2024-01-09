// ============================================
//                    Import
// ============================================
import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from "@angular/common";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'menu-lateral',
  templateUrl: './MenuLateralComponent.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./MenuLateralComponent.component.css']
})
export class MenuLateralComponent {

  // ============================================
  //                Variables
  // ============================================

  /**
   * Boolean to determine if the menu is open or closed.
   */
  menuOpen: boolean = false;

  /**
   * Toggles the menu open/close state and updates the body class accordingly.
   * @function toggleMenu
   * @returns {void}
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.toggle('menu-open', this.menuOpen);
    }
  }

  /**
   * Event emitter to notify when the content is toggled.
   */
  @Output() contentToggled = new EventEmitter<void>();

  /**
   * Emits the content toggled event.
   * @function toggleContent
   * @returns {void}
   */
  toggleContent(): void {
    this.contentToggled.emit();
  }
}
