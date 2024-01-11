import {Component} from '@angular/core';
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-validable-media-on-board',
  standalone: true,
  imports: [
    CdkDrag,
    NgIf
  ],
  templateUrl: './validable-media-on-board.component.html',
  styleUrl: './validable-media-on-board.component.css'
})
export class ValidableMediaOnBoardComponent extends MediaOnBoardComponent{

  mediaIsTruthworthy() : void {
    this.media.userTrustWorthy = true;
    this.dialog.closeAll();
  }

  mediaIsNotTruthworthy() : void {
    this.media.userTrustWorthy = false;
    this.dialog.closeAll();
  }
}
