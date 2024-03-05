import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

/**
 * Component representing the context dialog for "Enquêtes à MarsActu" game.
 * This dialog provides information about the game objectives and how to play.
 */
@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrl: './context.component.css'
})
export class ContextComponent {
  /**
   * Constructor for ContextComponent.
   * @param dialogRef - Reference to the MatDialogRef for closing the dialog.
   */
  constructor(private dialogRef: MatDialogRef<ContextComponent>) {}

  /**
   * Method to close the dialog.
   */
  closeDialog(): void { this.dialogRef.close(); }
}
