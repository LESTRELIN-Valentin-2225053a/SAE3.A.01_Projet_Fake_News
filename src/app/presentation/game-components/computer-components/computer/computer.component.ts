import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {WebsiteModel} from "../../../../core/domain/website.model";
import {SessionService} from "../../../../core/services/session.service";

/**
 * Component representing a virtual computer interface.
 * It displays a list of websites and allows dragging to rearrange them.
 */
@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent implements OnInit{
  /** The currently displayed website on the computer. */
  actualWebsite: WebsiteModel;

  /** The list of websites available on the computer. */
  websites: WebsiteModel[];

  constructor(private sessionService : SessionService, private _sanitizer : DomSanitizer) {
  }

  ngOnInit(): void {
    this.websites = this.sessionService.websites.getValue();
    this.actualWebsite = this.websites[0];
  }


  /**
   * Gets the DomSanitizer instance for sanitizing URLs.
   */
  get sanitizer(): DomSanitizer {
    return this._sanitizer;
  }

  /**
   * Handles the drop event when dragging websites to rearrange them.
   * @param event The drop event containing information about the drag and drop operation.
   */
  drop(event: CdkDragDrop<WebsiteModel[]>) {
    moveItemInArray(this.websites, event.previousIndex, event.currentIndex);
  }

  /**
   * Changes the currently displayed website to the one clicked in the tab.
   * @param website The website model corresponding to the clicked tab.
   */
  changeTab(website : WebsiteModel) {
    this.actualWebsite = website;
  }
}
