// ============================================
//                    Import
// ============================================
import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'left-corner-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './left-corner-button.component.html',
  styleUrl: './left-corner-button.component.css'
})
export class LeftCornerButtonComponent {

}
