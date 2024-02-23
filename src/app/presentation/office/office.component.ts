// ============================================
//                    Import
// ============================================
import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {
  BookSelectionInvestigationComponent
} from "../book-selection-investigation/book-selection-investigation.component";
import {Dialog} from "@angular/cdk/dialog";
import {SessionService} from "../services/session.service";
import {Investigation} from "../interfaces/investigation";
import {NgOptimizedImage} from "@angular/common";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-office',
  templateUrl : './office.component.html',
  standalone: true,
  imports: [
    RouterLink,
    BookSelectionInvestigationComponent,
    RouterOutlet,
    NgOptimizedImage
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
   * @param router
   * @param sessionService
   */
  constructor(public dialog: Dialog, private router: Router, private sessionService: SessionService) {
    console.log(this.noInvestigationChosen());
  }

  /**
   *
   */
  zoomComputerAndChangePage() {
    this.isComputerZoomed = true;
    setTimeout(() => {
      this.router.navigate(['office/computer']);
    }, 1000);
  }

  noInvestigationChosen() : boolean {
    return this.sessionService.currentInvestigation.investigation_id === -1;
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
