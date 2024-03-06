import {Component} from '@angular/core';
import {SessionService} from "../../../../core/services/session.service";

/**
 * Component representing a board to be used in routing scenarios.
 * Dynamically selects the appropriate board type based on the current investigation type obtained from the SessionService.
 */
@Component({
  selector: 'board-for-router',
  templateUrl: './board-for-router.component.html',
})
export class BoardForRouterComponent {
  /** The type of board determined by the current investigation. */
  boardType? : string;

  /**
   * Constructs a new BoardForRouterComponent.
   * @param sessionService The service for managing the current user session and related data.
   */
  constructor(private sessionService : SessionService) {
    sessionService.currentInvestigation.subscribe(investigation => {
      this.boardType = investigation?.board_type
    })
  }
}
