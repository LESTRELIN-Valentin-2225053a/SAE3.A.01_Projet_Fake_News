import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {MediaModel} from "../../../../core/domain/media.model";
import {SessionService} from "../../../../core/services/session.service";

/**
 * Component representing a board with media elements.
 * Extends the BoardComponent to include media-related functionality.
 * Manages the display of media elements on the board.
 */
@Component({
  selector: 'app-board-with-medias',
  template: '',
  styles: ''
})
export class BoardWithMediasComponent extends BoardComponent implements OnInit, AfterContentChecked {
  /** The width ratio for media elements on the board. */
  mediaWidthRatio: number = 0.1;

  /** The height ratio for media elements on the board. */
  mediaHeightRatio!: number;

  /** Array of media elements to be displayed on the board. */
  medias: MediaModel[];

  /**
   * Constructs a new instance of the BoardWithMediasComponent.
   * @param _sessionService - The session service for managing user session and related data.
   */
  constructor(private _sessionService: SessionService) {
    super();
  }

  /** Lifecycle hook called after Angular has initialized the component's properties. */
  ngOnInit(): void {
    this.medias = this._sessionService.medias.getValue();
    console.log(this.medias);
  }

  /** Lifecycle hook called after Angular has checked the component's content. */
  ngAfterContentChecked(): void {
    this.mediaHeightRatio = (this.width / this.height) * this.mediaWidthRatio;
  }

  /** Getter for accessing the session service. */
  get sessionService(): SessionService {
    return this._sessionService;
  }
}
