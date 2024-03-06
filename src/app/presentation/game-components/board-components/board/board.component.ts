import { Component } from '@angular/core';

/**
 * Component representing a board in the application.
 * Responsible for rendering the board and managing its dimensions.
 */
@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  /** The width of the board, calculated as 75% of the window's inner width. */
  width: number = window.innerWidth * 0.75;

  /** The height of the board, calculated as 75% of the window's inner height. */
  height: number = window.innerHeight * 0.75;
}

