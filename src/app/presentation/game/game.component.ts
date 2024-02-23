import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LeftCornerButtonComponent} from "../left-corner-button/left-corner-button.component";
import {RightCornerButtonComponent} from "../right-corner-button/right-corner-button.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    RouterOutlet,
    LeftCornerButtonComponent,
    RightCornerButtonComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
