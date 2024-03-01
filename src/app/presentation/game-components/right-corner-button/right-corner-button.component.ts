// ============================================
//                    Import
// ============================================
import { Component } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {TutorialComponent} from "../tutorial/tutorial.component";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'right-corner-button',
  templateUrl: './right-corner-button.component.html',
  styleUrl: './right-corner-button.component.css'
})
export class RightCornerButtonComponent {
  constructor(public dialog: Dialog) {
  }

  openDialog(): void {
    this.dialog.open(TutorialComponent, {
      autoFocus: 'false',
    });
  }
}