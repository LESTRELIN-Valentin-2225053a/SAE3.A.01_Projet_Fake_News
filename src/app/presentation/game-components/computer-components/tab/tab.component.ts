// ============================================
//                    Import
// ============================================
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WebsiteModel} from "../../../../core/domain/website.model";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {

// ============================================
//                Variables
// ============================================

  /**
   *
   */
  @Input() website! : WebsiteModel;

  /**
   *
   */
  @Output() tabClicked : EventEmitter<WebsiteModel> = new EventEmitter<WebsiteModel>();


// ============================================
//                Methode
// ============================================
  click() {
    this.tabClicked.emit(this.website);
  }
}
