import {Component, inject} from '@angular/core';
import {Website} from "../website";
import {DomSanitizer} from "@angular/platform-browser";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {TabComponent} from "../tab/tab.component";
import {NgForOf} from "@angular/common";
import {WebsiteService} from "../services/website.service";

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
  sanitizer = inject(DomSanitizer);
  websites : Website[] = [];
  actualWebsite : Website;
  websiteService : WebsiteService = inject(WebsiteService);

  constructor() {
    this.websites = this.websiteService.getInitialWebsites();
    this.actualWebsite = this.websites[0];
  }

  drop(event: CdkDragDrop<Website[]>) {
    moveItemInArray(this.websites, event.previousIndex, event.currentIndex);
  }

  changeTab($event : Website) {
    this.actualWebsite = $event;
  }
}
