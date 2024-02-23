// ============================================
//                    Import
// ============================================
import {Component, inject} from '@angular/core';
import {Website} from "../interfaces/website";
import {DomSanitizer} from "@angular/platform-browser";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {TabComponent} from "../tab/tab.component";
import {NgForOf, NgOptimizedImage} from "@angular/common";
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
        NgForOf,
        NgOptimizedImage
    ],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {

// ============================================
//                Variables
// ============================================

  actualWebsite : Website;
  websites : Website[];

// ============================================
//                Methods
// ============================================

  constructor(public sessionService : SessionService, public sanitizer : DomSanitizer) {
    this.websites = sessionService.websites;
    this.actualWebsite = this.websites[0];
  }

  drop(event: CdkDragDrop<Website[]>) {
    moveItemInArray(this.websites, event.previousIndex, event.currentIndex);
  }
  changeTab($event : Website) {
    this.actualWebsite = $event;
  }
}
