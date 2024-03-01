import { Component } from '@angular/core';

@Component({
  selector: 'wrong-answer',
  templateUrl: './wrong-answer.component.html',
  styleUrl: './wrong-answer.component.css'
})
export class WrongAnswerComponent {
  msg : string = "Mince, vos réponses ne sont pas justes. Veuillez réessayer !";
}
