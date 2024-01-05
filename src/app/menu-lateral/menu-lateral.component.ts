
import {Component, EventEmitter, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'menu-lateral',
  templateUrl: './menu-lateral.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  menuOpen: boolean = false;
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.toggle('menu-open', this.menuOpen);
    }
  }

  @Output() contentToggled = new EventEmitter<void>();

  toggleContent(): void {
    this.contentToggled.emit();
  }
}
