// ============================================
//                    Import
// ============================================
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../../core/services/auth.service";
import {FormLoginComponent} from "../form-login/form-login.component";
import {ContextComponent} from "../context/context.component";


// ============================================
//                Component
// ============================================
@Component({
  selector: 'showmenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

// ============================================
//                Variables
// ============================================

  /**
   *   Flag to control the visibility of the content.
   */
  isContentVisible: boolean = false;

  loginStorage: string = '';

  isLogged: boolean = false;

// ============================================
//                Methode
// ============================================

  constructor(private authService : AuthService, public dialog: MatDialog, private viewContainerRef: ViewContainerRef) {
    authService.isLogged().subscribe(isLogged => {
      this.isLogged = isLogged;
      if(this.isLogged)
        this.loginStorage = 'Connecté';
      else
        this.loginStorage = 'Non connecté';
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('isFirstVisit')) {
      this.dialog.open(ContextComponent, {});
      localStorage.setItem('isFirstVisit', 'true');
    }
  }

  logout(){
    this.authService.logout().subscribe();
  }

  openDialog(): void {
    this.dialog.open(FormLoginComponent, {viewContainerRef: this.viewContainerRef});
  }

  /**
   * Toggles the visibility of the content.
   * @function toggleContent
   * @returns {void}
   */
  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }

  /**
   * Handler for content toggle events.
   * @function onContentToggled
   * @returns {void}
   */
  onContentToggled(): void {
    this.isContentVisible = !this.isContentVisible;
  }

}
