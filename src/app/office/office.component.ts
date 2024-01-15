// ============================================
//                    Import
// ============================================
import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-office',
  templateUrl : './office.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./office.component.css']
})
export class OfficeComponent {

// ============================================
//                Variables
// ============================================

  /**
   *
   */
  isComputerZoomed = false;

// ============================================
//                Methode
// ============================================

  /**
   *
   */
  zoomComputer() {
    this.isComputerZoomed = true;
  }

  /**
   *
   */
  shakeBonsai() {
    const bonsai = document.querySelector('.bonsai');
    bonsai?.classList.add('clicked');
    setTimeout(() => {
      bonsai?.classList.remove('clicked');
    }, 500);
  }
}
