import {Component} from '@angular/core';
import {SessionService} from "../../../../core/services/session.service";

@Component({
  selector: 'board-for-router',

  templateUrl: './board-for-router.component.html',
  styleUrl: './board-for-router.component.css'
})
export class BoardForRouterComponent {
  boardType? : string;

  constructor(private sessionService : SessionService) {
    sessionService.currentInvestigation.subscribe(investigation => {
      this.boardType = investigation?.board_type
    })
  }
}
