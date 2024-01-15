// ============================================
//                    Import
// ============================================
import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {MediaLocation} from "../interfaces/media-location";
import {Dialog} from "@angular/cdk/dialog";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-media-location-on-board',
  standalone: true,
  templateUrl: './media-location-on-board.component.html',
  styleUrl: './media-location-on-board.component.css'
})
export class MediaLocationOnBoardComponent {

// ============================================
//                Variables
// ============================================

  /**
   *
   */
  @Input() data! : MediaLocation;

  /**
   *
   */
  @Input() mediaRatio! : number;

  /**
   *
   */
  @ViewChild(TemplateRef) clickedMediaTemplate!:TemplateRef<any>;

// ============================================
//                Methods
// ============================================

  /**
   *
   * @param dialog
   */
  constructor(public dialog: Dialog) {}

  /**
   *
   */
  openDialog(): void {
    this.dialog.open(this.clickedMediaTemplate, {
      autoFocus: 'false',
    });
  }
}
