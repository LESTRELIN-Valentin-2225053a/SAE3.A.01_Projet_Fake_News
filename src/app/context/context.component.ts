import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [],
  templateUrl: './context.component.html',
  styleUrl: './context.component.css'
})
export class ContextComponent {
  constructor(private dialogRef: MatDialogRef<ContextComponent>) {}


  CloseDialog(): void {
    this.dialogRef.close();
  }
}
