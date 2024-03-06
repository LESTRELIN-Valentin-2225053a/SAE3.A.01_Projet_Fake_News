import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../../core/services/auth.service";
import {FormLoginComponent} from "../form-login/form-login.component";
import {ContextComponent} from "../context/context.component";

/**
 * Component representing the menu for the application.
 * This component controls the visibility of content, user authentication status, and provides methods for user interaction.
 */
@Component({
  selector: 'showmenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  /** Flag to control the visibility of the content. */
  isContentVisible: boolean = false;

  /** Storage for the login status. */
  loginStorage: string = 'VEUILLEZ PATIENTEZ';

  /** Flag to indicate whether the user is logged in. */
  isLogged: boolean = false;

  /**
   * Constructor for MenuComponent.
   * @param authService - Authentication service for user authentication.
   * @param dialog - MatDialog service for opening dialogs.
   * @param viewContainerRef - Reference to the view container for dialogs.
   */
  constructor(private authService : AuthService, public dialog: MatDialog, private viewContainerRef: ViewContainerRef) {
    authService.isLogged().subscribe(isLogged => {
      this.isLogged = isLogged;
      if(this.isLogged)
        this.loginStorage = 'Connecté';
      else
        this.loginStorage = 'Non connecté';
    });
  }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Opens a dialog for displaying context information if it's the user's first visit.
   */
  ngOnInit(): void {
    if (!localStorage.getItem('isFirstVisit')) {
      this.dialog.open(ContextComponent, {});
      localStorage.setItem('isFirstVisit', 'true');
    }
  }

  /**
   * Method to log out the user.
   */
  logout(){
    this.authService.logout().subscribe();
  }

  /**
   * Method to open the login dialog.
   */
  openDialog(): void {
    this.dialog.open(FormLoginComponent, {viewContainerRef: this.viewContainerRef});
  }
}
