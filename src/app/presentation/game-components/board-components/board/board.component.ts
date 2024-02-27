// ============================================
//                    Import
// ============================================
import {Component} from '@angular/core';

// ============================================
//                Component
// ============================================
@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent{

// ============================================
//                Variables
// ============================================
  /**
   *
   */
  width : number = window.innerWidth*0.75;

  /**
   *
   */
  height : number = window.innerHeight*0.75;
}
