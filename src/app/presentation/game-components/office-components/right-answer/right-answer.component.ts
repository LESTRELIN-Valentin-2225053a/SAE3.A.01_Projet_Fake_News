import { Component } from '@angular/core';

@Component({
  selector: 'right-answer',
  templateUrl: './right-answer.component.html',
  styleUrl: './right-answer.component.css'
})
export class RightAnswerComponent {
  msg : string = "Félicitations ! Vous avez résolu l'enquête !";
}
