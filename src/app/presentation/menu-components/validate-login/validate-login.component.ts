import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

/**
 * Component representing the validation dialog for successful login.
 * This component automatically closes after a certain duration.
 */
@Component({
  selector: 'app-validate-login',
  templateUrl: './validate-login.component.html',
})
export class ValidateLoginComponent implements OnInit {
  /**
   * Constructor for ValidateLoginComponent.
   * @param dialogRef - Reference to the MatDialogRef for closing the dialog.
   */
  constructor(private dialogRef: MatDialogRef<ValidateLoginComponent>) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Closes the dialog after a delay.
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  }
}
