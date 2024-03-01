// Import
import { Component } from '@angular/core';
import {Location} from "@angular/common";

// Component
@Component({
  selector: 'left-corner-button',
  templateUrl: './left-corner-button.component.html',
  styleUrls: ['./left-corner-button.component.css']
})
export class LeftCornerButtonComponent {

  /**
   * Constructor
   * @param location
   */
  constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }
}
