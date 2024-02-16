// ============================================
//                    Import
// ============================================
import {Component, OnInit} from '@angular/core';
import { BoardComponent } from "../board/board.component";
import {NgClass, NgIf} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FormConnexionComponent} from "../form-connexion/form-connexion.component";
import {MatDialog} from "@angular/material/dialog";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'showmenu',
  templateUrl: './menu.component.html',
  imports: [
    BoardComponent,
    NgIf,
    RouterLink,
    RouterOutlet,
    NgClass,
  ],
  standalone: true,
  styleUrls: ['./menu.component.css']
})
export class Menu implements OnInit{


// ============================================
//                Variables
// ============================================

  /**
   *   Flag to control the visibility of the content.
   */
  isContentVisible: boolean = false;

  loginStorage = '';

  isConnect = false;


// ============================================
//                Methode
// ============================================

  /**
   *   Constructor
   * @param dialog
   * @param router
   */
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('login') != 'undefined' && localStorage.getItem('login') != null) {
      // @ts-ignore
      this.loginStorage = "Conecté en tant que : " + localStorage.getItem('login');
      this.ChangeConnect();
    } else {
      this.loginStorage = 'non connecté';
      }
  }

  Deconnection(){
    localStorage.setItem('login', 'undefined');
    this.loginStorage = 'non connecté';
    this.ChangeConnect();
  }

  /**
   *   Go to the office
   */
  GoToOffice(){
    this.router.navigate(['/office']);
  }

  /**
   *   Go to the tutorial
   */
  GoToTuto(){
    this.router.navigate(['/Tutoriel']);
  }

  /**
   *   Go to the connexion
   */
  GoToConnexion(){
    this.router.navigate(['/connexion']);
  }

  /**
   *   Go to the context
   */
  GoToContext(){
    this.router.navigate(['/context']);
  }

  /**
   *
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(FormConnexionComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (localStorage.getItem('login') != 'undefined') {
        this.loginStorage = "Conecté en tant que : " + localStorage.getItem('login');
        this.ChangeConnect();
      }
    });
  }

  /**
   *  Change the connexion state
   */
  ChangeConnect(){
    this.isConnect = !this.isConnect;
  }
}
