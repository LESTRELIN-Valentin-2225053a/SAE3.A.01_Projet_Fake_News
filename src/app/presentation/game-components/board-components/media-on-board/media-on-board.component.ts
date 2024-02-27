// ============================================
//                    Import
// ============================================
import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {MediaModel} from "../../../../core/domain/media.model";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'media-on-board',
  templateUrl: './media-on-board.component.html',
  styleUrl: './media-on-board.component.css'
})
export class MediaOnBoardComponent {

// ============================================
//                Variables
// ============================================

  /**
   *
   */
  @Input() media! : MediaModel;

  /**
   *
   */
  @ViewChild('dialog', { read: TemplateRef }) clickedMediaTemplate! : TemplateRef<any>;


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
    this.dialog.open(this.clickedMediaTemplate,{
      autoFocus : 'false',
    });
  }
}
