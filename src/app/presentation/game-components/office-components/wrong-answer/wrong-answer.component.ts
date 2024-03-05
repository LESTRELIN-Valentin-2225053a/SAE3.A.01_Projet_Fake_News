import { Component } from '@angular/core';


/**
 * Component responsible for displaying a message when the user provides a wrong answer during an investigation.
 */
@Component({
  selector: 'wrong-answer',
  templateUrl: './wrong-answer.component.html',
  styleUrl: './wrong-answer.component.css'
})
export class WrongAnswerComponent {
  /** Message to display indicating that the user's answers are incorrect and to try again. */
  msg : string = "Mince, vos réponses ne sont pas justes. Veuillez réessayer !";
}
