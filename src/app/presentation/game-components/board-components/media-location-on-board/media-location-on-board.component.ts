// ============================================
//                    Import
// ============================================
import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {MediaLocationModel} from "../../../../core/domain/media-location.model";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'media-location-on-board',
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
  @Input() data! : MediaLocationModel;

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
