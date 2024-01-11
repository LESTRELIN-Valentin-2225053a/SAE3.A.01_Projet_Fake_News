import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Website} from "../interfaces/website";
import {CdkDrag} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    CdkDrag
  ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() website! : Website;
  @Output() tabClicked : EventEmitter<Website> = new EventEmitter<Website>();

  click() {
    this.tabClicked.emit(this.website);
  }
}
