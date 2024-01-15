// ============================================
//                    Import
// ============================================
import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  BookSelectionInvestigationComponent
} from "../book-selection-investigation/book-selection-investigation.component";
import {Dialog} from "@angular/cdk/dialog";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-office',
  templateUrl : './office.component.html',
  standalone: true,
  imports: [
    RouterLink,
    BookSelectionInvestigationComponent
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
//                Methods
// ============================================

  /**
   *
   * @param dialog
   */
  constructor(public dialog: Dialog) {}

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

  /**
   *
   */
  openDialog(): void {
    this.dialog.open(BookSelectionInvestigationComponent, {
      autoFocus: 'false',
    });
  }
}
