import {Component, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {Dialog} from "@angular/cdk/dialog";
import {SessionService} from "../../../../core/services/session.service";
import {BookSelectionInvestigationComponent} from "../book-selection-investigation/book-selection-investigation.component";

/**
 * Component representing the office environment.
 * It provides functionalities such as zooming into the computer, shaking the bonsai, and opening a dialog for book selection.
 */
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
})
export class OfficeComponent {
  /** Indicates whether the computer is zoomed in. */
  isComputerZoomed = false;

  /**
   * Constructor
   * @param dialog The Angular Material dialog service.
   * @param router The Angular router service.
   * @param viewContainerRef The reference to the view container.
   * @param sessionService The service managing the user session.
   */
  constructor(public dialog: Dialog, private router: Router, private viewContainerRef: ViewContainerRef, private sessionService: SessionService) {
  }

  /**
   * Zooms into the computer and navigates to the computer page after a delay.
   */
  zoomComputerAndChangePage() {
    this.isComputerZoomed = true;
    setTimeout(() => {
      this.router.navigate(['office/computer']);
    }, 1000);
  }

  /**
   * Checks if there is no investigation chosen.
   * @returns A boolean indicating whether there is no investigation chosen.
   */
  noInvestigationChosen() : boolean {
    return !this.sessionService.isConductingInvestigation();
  }

  /**
   * Shakes the bonsai plant element.
   */
  shakeBonsai() {
    const bonsai = document.querySelector('.bonsai');
    bonsai?.classList.add('clicked');
    setTimeout(() => {
      bonsai?.classList.remove('clicked');
    }, 500);
  }

  /**
   * Opens a dialog for book selection.
   */
  openDialog(): void {
    this.dialog.open(BookSelectionInvestigationComponent, {
      autoFocus: 'false',
      viewContainerRef: this.viewContainerRef
    });
  }
}
