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
  isMediaTrustWorthy : boolean | null = null;

  mediaIsTruthworthy() : void {
    this.isMediaTrustWorthy = true;
    this.dialog.closeAll();
  }

  mediaIsNotTruthworthy() : void {
    this.isMediaTrustWorthy = false;
    this.dialog.closeAll();
  }
}
