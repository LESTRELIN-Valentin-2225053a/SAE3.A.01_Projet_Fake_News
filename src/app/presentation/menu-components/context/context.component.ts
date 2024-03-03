import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrl: './context.component.css'
})
export class ContextComponent {
  constructor(private dialogRef: MatDialogRef<ContextComponent>) {}


  CloseDialog(): void {
    this.dialogRef.close();
  }
}
