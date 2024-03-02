import {Component, inject} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {NgIf} from "@angular/common";
import {InvestigationModel} from "../../../core/domain/investigation.model";
import {MediaModel} from "../../../core/domain/media.model";
import {UserModel} from "../../../core/domain/user.model";
import {WebsiteModel} from "../../../core/domain/website.model";
import {MediaService} from "../../../core/services/media.service";
import {WebsiteService} from "../../../core/services/website.service";
import {InvestigationService} from "../../../core/services/investigation.service";
import {UserService} from "../../../core/services/user.service";
import {BehaviorSubject, Observable} from "rxjs";
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  // ============================================
  //                Variables
  // ============================================

  width : number = window.innerWidth*0.75;
  height : number = window.innerHeight*0.75;

  private mediaService: MediaService = inject(MediaService);
  private websiteService: WebsiteService = inject(WebsiteService);
  private investigationService: InvestigationService = inject(InvestigationService);
  private UserService: UserService = inject(UserService);
  private AdminService: AdminService = inject(AdminService);

  //Variables for the list of objects
  investigations : Observable<InvestigationModel[]>;
  medias : Observable<MediaModel[]>;
  websites : Observable<WebsiteModel[]>;
  users : Observable<UserModel[]>;

  //Variables for the tabs
  investigationVisible : boolean = true;
  usersVisible : boolean = false;
  mediaVisible : boolean = false;
  websiteVisible : boolean = false;

  //Variables for the current objects
  currentInvestigation : BehaviorSubject<InvestigationModel | null> = new BehaviorSubject<InvestigationModel | null>(null);
  currentMedia : BehaviorSubject<MediaModel | null> = new BehaviorSubject<MediaModel | null>(null);
  currentWebsite : BehaviorSubject<WebsiteModel | null> = new BehaviorSubject<WebsiteModel | null>(null);
  currentUser : BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  //Variables for the user actions and display
  showUserDetails: boolean = false;

  // ============================================
  // ============================================
  //                Methods
  // ============================================
  // ============================================

  constructor() {
    this.investigations = this.investigationService.getAllInvestigations();
    this.medias =  this.mediaService.getAllMedias();
    this.websites = this.websiteService.getAllWebsites();
    this.users = this.UserService.getAllUsers();
  }

  // ============================================
  //                Tabs
  // ============================================
  showInvestigation() {
    this.investigationVisible = true;
    this.usersVisible = false;
    this.mediaVisible = false;
    this.websiteVisible = false;
  }

  showUsers() {
    this.investigationVisible = false;
    this.usersVisible = true;
    this.mediaVisible = false;
    this.websiteVisible = false;
  }

  showMedia() {
    this.investigationVisible = false;
    this.usersVisible = false;
    this.mediaVisible = true;
    this.websiteVisible = false;
  }

  showWebsite() {
    this.investigationVisible = false;
    this.usersVisible = false;
    this.mediaVisible = false;
    this.websiteVisible = true;
  }

  // ============================================
  //           Manage Current Objects
  // ============================================

  clickUser(user : UserModel){
    this.currentUser.next(user);
    this.currentInvestigation.next(null);
    this.currentMedia.next(null);
    this.currentWebsite.next(null);
  }

  clickInvestigation(investigation : InvestigationModel){
    this.currentInvestigation.next(investigation);
    this.currentMedia.next(null);
    this.currentWebsite.next(null);
    this.currentUser.next(null);
  }

  // ============================================
  //                Users Actions
  // ============================================

  deleteCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.deleteUser(this.currentUser.getValue().id);
    }
  }

  promoteCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.promoteUser(this.currentUser.getValue().id);
    }
  }

  blockCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.blockUser(this.currentUser.getValue().id);
    }
  }

  unblockCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.unblockUser(this.currentUser.getValue().id);
    }
  }

  openUserDetails() {
    this.showUserDetails = true;
  }

  closeUserDetails() {
    this.showUserDetails = false;
  }
}
