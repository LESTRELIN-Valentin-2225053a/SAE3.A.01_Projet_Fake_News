// ============================================
//                    Import
// ============================================
import {Component, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {Dialog} from "@angular/cdk/dialog";
import {SessionService} from "../../../../core/services/session.service";
import {BookSelectionInvestigationComponent} from "../book-selection-investigation/book-selection-investigation.component";


// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
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
   * @param viewContainerRef
   * @param sessionService
   */
  constructor(public dialog: Dialog, private router: Router, private viewContainerRef: ViewContainerRef, private sessionService: SessionService) {
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
    return !this.sessionService.isConductingInvestigation();
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
      viewContainerRef: this.viewContainerRef
    });
  }
}
