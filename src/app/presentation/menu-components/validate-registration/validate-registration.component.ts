import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

/**
 * Component representing the validation dialog for successful registration.
 * This component automatically closes after a certain duration.
 */
@Component({
  selector: 'app-validate-registration',
  templateUrl: './validate-registration.component.html'
})
export class ValidateRegistrationComponent implements OnInit {
  /**
   * Constructor for ValidateRegistrationComponent.
   * @param dialogRef - Reference to the MatDialogRef for closing the dialog.
   */
  constructor(private dialogRef: MatDialogRef<ValidateRegistrationComponent>) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Closes the dialog after a delay.
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500); // Close the dialog after 2500 milliseconds (2.5 seconds)
  }
}

