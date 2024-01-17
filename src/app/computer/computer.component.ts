// ============================================
//                    Import
// ============================================
import {Component, inject} from '@angular/core';
import {Website} from "../interfaces/website";
import {DomSanitizer} from "@angular/platform-browser";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {TabComponent} from "../tab/tab.component";
import {NgForOf} from "@angular/common";
import {SessionService} from "../services/session.service";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    TabComponent,
    NgForOf
  ],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {

// ============================================
//                Variables
// ============================================

  sanitizer = inject(DomSanitizer);
  actualWebsite : Website;
  sessionService : SessionService = inject(SessionService);

// ============================================
//                Methods
// ============================================

  constructor() {
    this.actualWebsite = this.sessionService.websites[0];
  }

  drop(event: CdkDragDrop<Website[]>) {
    moveItemInArray(this.sessionService.websites, event.previousIndex, event.currentIndex);
  }
  changeTab($event : Website) {
    this.actualWebsite = $event;
  }
}
