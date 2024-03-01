// ============================================
//                    Import
// ============================================
import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {WebsiteModel} from "../../../../core/domain/website.model";
import {SessionService} from "../../../../core/services/session.service";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent implements OnInit{

// ============================================
//                Variables
// ============================================

  actualWebsite : WebsiteModel;
  websites : WebsiteModel[];

// ============================================
//                Methods
// ============================================

  constructor(private sessionService : SessionService, private _sanitizer : DomSanitizer) {
  }

  ngOnInit(): void {
    this.websites = this.sessionService.websites.getValue();
    this.actualWebsite = this.websites[0];
  }


  get sanitizer(): DomSanitizer {
    return this._sanitizer;
  }

  drop(event: CdkDragDrop<WebsiteModel[]>) {
    moveItemInArray(this.websites, event.previousIndex, event.currentIndex);
  }

  changeTab($event : WebsiteModel) {
    this.actualWebsite = $event;
  }

}
