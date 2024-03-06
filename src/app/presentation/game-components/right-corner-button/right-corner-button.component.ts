import { Component } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {TutorialComponent} from "../tutorial/tutorial.component";

/**
 * Component representing a button located in the right corner of the screen.
 * Typically used to trigger a tutorial or show additional information.
 */
@Component({
  selector: 'right-corner-button',
  templateUrl: './right-corner-button.component.html',
  styleUrl: './right-corner-button.component.css'
})
export class RightCornerButtonComponent {
  constructor(public dialog: Dialog) {
  }

  /**
   * Opens a dialog window to display the tutorial component.
   */
  openDialog(): void {
    this.dialog.open(TutorialComponent, {
      autoFocus: 'false',
    });
  }
}
