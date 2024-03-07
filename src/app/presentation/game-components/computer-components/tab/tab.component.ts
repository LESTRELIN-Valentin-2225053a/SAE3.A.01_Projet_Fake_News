import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WebsiteModel} from "../../../../core/domain/website.model";

/**
 * Component representing a tab in the computer screen.
 * It displays information about a website and emits an event when clicked.
 */
@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {

  /**
   * The website model associated with the tab.
   */
  @Input() website! : WebsiteModel;

  @Input() isActive: boolean = false;

  /**
   * Event emitter that emits the website model when the tab is clicked.
   */
  @Output() tabClicked : EventEmitter<WebsiteModel> = new EventEmitter<WebsiteModel>();

  /**
   * Handles the click event of the tab.
   * Emits the website model associated with the tab.
   */
  click() {
    this.tabClicked.emit(this.website);
  }
}
