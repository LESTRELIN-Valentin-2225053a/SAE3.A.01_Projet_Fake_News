import { Component } from '@angular/core';

/**
 * Component responsible for displaying a message when the user provides a correct answer during an investigation.
 */
@Component({
  selector: 'right-answer',
  templateUrl: './right-answer.component.html',
  styleUrl: './right-answer.component.css'
})
export class RightAnswerComponent {
  /** Message to display indicating successful resolution of the investigation. */
  msg : string = "Félicitations ! Vous avez résolu l'enquête !";
}
