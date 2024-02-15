import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-validate-login',
  standalone: true,
  imports: [],
  templateUrl: './validate-login.component.html',
  styleUrl: './validate-login.component.css'
})
export class ValidateLoginComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ValidateLoginComponent>) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  }

}
