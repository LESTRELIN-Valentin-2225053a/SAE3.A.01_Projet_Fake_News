import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-validate-login',
  standalone: true,
  imports: [],
  templateUrl: './validate-inscription.component.html',
  styleUrl: './validate-inscription.component.css'
})
export class ValidateInscriptionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ValidateInscriptionComponent>) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  }

}
