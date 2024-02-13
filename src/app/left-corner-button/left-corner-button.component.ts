// Import
import { Component } from '@angular/core';
import { Router } from "@angular/router";

// Component
@Component({
  selector: 'left-corner-button',
  templateUrl: './left-corner-button.component.html',
  standalone: true,
  styleUrls: ['./left-corner-button.component.css']
})
export class LeftCornerButtonComponent {

  /**
   * Constructor
   * @param router
   */
  constructor(private router: Router) {}

  /**
   * Switch between the office and the menu
   */
  Switch() {
    if (this.router.url == "/office" || this.router.url == "/connexion" || this.router.url == "/context") {
      this.router.navigate(["../"]);
    } else if (this.router.url == "/") {

    } else {
      this.router.navigate(["office"]);
    }
  }
}
