// ============================================
//                    Import
// ============================================
import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {MediaModel} from "../../../../core/domain/media.model";
import {SessionService} from "../../../../core/services/session.service";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-board-with-medias',
  template: '',
  styles: ''
})
export class BoardWithMediasComponent extends BoardComponent implements OnInit, AfterContentChecked{

// ============================================
//                Variables
// ============================================

  mediaWidthRatio : number = 0.1;

  mediaHeightRatio! : number;

  medias: MediaModel[];

// ============================================
//                Methods
// ============================================

  constructor(private _sessionService : SessionService) {
    super();
  }

  ngOnInit(): void {
    this.medias = this._sessionService.medias.getValue();
  }

  ngAfterContentChecked(): void {
    this.mediaHeightRatio = (this.width/this.height)*this.mediaWidthRatio;
  }

  get sessionService(): SessionService {
    return this._sessionService;
  }
}
