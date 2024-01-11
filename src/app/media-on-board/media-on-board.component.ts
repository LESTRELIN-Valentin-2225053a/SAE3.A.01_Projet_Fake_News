import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Media} from "../interfaces/media";
import {Dialog} from "@angular/cdk/dialog";

@Component({
  selector: 'app-media-on-board',
  standalone: true,
  imports: [],
  templateUrl: './media-on-board.component.html',
  styleUrl: './media-on-board.component.css'
})
export class MediaOnBoardComponent {
  @Input() media! : Media;
  @ViewChild('dialog', { read: TemplateRef }) clickedMediaTemplate!:TemplateRef<any>;

  constructor(public dialog: Dialog) {}

  openDialog(): void {
    this.dialog.open(this.clickedMediaTemplate,{
      autoFocus : 'false',
    });
  }
}
