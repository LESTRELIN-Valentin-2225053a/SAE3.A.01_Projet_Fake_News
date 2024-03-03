import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-validate-registration',
  templateUrl: './validate-registration.component.html'
})
export class ValidateRegistrationComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ValidateRegistrationComponent>) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.dialogRef.close();
  }, 2500);
}
}
