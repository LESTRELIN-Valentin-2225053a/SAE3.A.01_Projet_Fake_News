import { Component } from '@angular/core';
import {BoardWithMediasComponent} from "../board-with-medias/board-with-medias.component";

/**
 * Component representing a board with validatable media elements.
 * Extends the BoardWithMediasComponent to include functionality for validatable media elements.
 * Manages the validation of media elements on the board based on user input.
 */
@Component({
  selector: 'board-with-validatable-medias',
  templateUrl: './board-with-validatable-medias.component.html',
  styleUrl: './board-with-validatable-medias.component.css'
})
export class BoardWithValidatableMediasComponent extends BoardWithMediasComponent {}
