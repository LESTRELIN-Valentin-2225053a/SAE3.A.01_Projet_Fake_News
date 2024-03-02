import {Component, inject} from '@angular/core';

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
import {FormControl, FormGroup} from "@angular/forms";

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

  //Variables for the investigation actions and display
  showInvestigationDetails: boolean = false;
  showInvestigationUpdate: boolean = false;
  showInvestigationCreate: boolean = false;
  UpdateInvestigationForm: FormGroup = new FormGroup({
    update_title: new FormControl(''),
    update_description: new FormControl(''),
    update_explanation: new FormControl(''),
    update_board_type: new FormControl('')
  });
  CreateInvestigationForm: FormGroup = new FormGroup({
    create_title: new FormControl(''),
    create_description: new FormControl(''),
    create_explanation: new FormControl(''),
    create_board_type: new FormControl('')
  });

  //Variables for the website actions and display
  showWebsiteDetails: boolean = false;
  showWebsiteUpdate: boolean = false;
  showWebsiteCreate: boolean = false;
  UpdateWebsiteForm: FormGroup = new FormGroup({
    update_title: new FormControl(''),
    update_description: new FormControl(''),
    update_url: new FormControl('')
  });
  CreateWebsiteForm: FormGroup = new FormGroup({
    create_title: new FormControl(''),
    create_description: new FormControl(''),
    create_url: new FormControl('')
  });

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
      this.AdminService.deleteUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
        });
    }
  }

  promoteCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.promoteUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
        });
    }
  }

  blockCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.blockUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
        });
    }
  }

  unblockCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.unblockUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
      });
    }
  }

  openUserDetails() {
    this.showUserDetails = true;
  }

  closeUserDetails() {
    this.showUserDetails = false;
  }

  // ============================================
  //           Investigation Actions
  // ============================================

  deleteCurrentInvestigation(){
    if (this.currentInvestigation.getValue() != null){
      // @ts-ignore
      this.AdminService.deleteInvestigation(this.currentInvestigation.getValue().id)
        .subscribe(() => {
          this.investigations = this.investigationService.getAllInvestigations();
      });
    }
  }

  openInvestigationDetails() {
    this.showInvestigationDetails = true;
    this.showInvestigationUpdate = false;
    this.showInvestigationCreate = false;
  }

  closeInvestigationDetails() {
    this.showInvestigationDetails = false;
  }

  openInvestigationUpdate() {
    this.showInvestigationUpdate = true;
    this.showInvestigationCreate = false;
    this.showInvestigationDetails = false;
    if (this.currentInvestigation.getValue() != null){
      this.UpdateInvestigationForm.setValue({
        // @ts-ignore
        update_title: this.currentInvestigation.getValue().title,
        // @ts-ignore
        update_description: this.currentInvestigation.getValue().description,
        // @ts-ignore
        update_explanation: this.currentInvestigation.getValue().explanation,
        // @ts-ignore
        update_board_type: this.currentInvestigation.getValue().board_type
      });
    }
  }

  closeInvestigationUpdate() {
    this.showInvestigationUpdate = false;
  }

  updateCurrentInvestigation(){
    console.log(this.UpdateInvestigationForm.value);
    if (this.currentInvestigation.getValue() != null){
      console.log("zizi");
      let title : string = this.UpdateInvestigationForm.get('update_title')?.value;
      let description : string = this.UpdateInvestigationForm.get('update_description')?.value;
      let explanation : string = this.UpdateInvestigationForm.get('update_explanation')?.value;
      let board_type : string = this.UpdateInvestigationForm.get('update_board_type')?.value;
      // @ts-ignore
      let id : number = this.currentInvestigation.getValue().id;
      this.AdminService.updateInvestigation(id, title, description, explanation, board_type)
        .subscribe(() => {
        this.investigations = this.investigationService.getAllInvestigations();
      });
    }
  }

  openInvestigationCreate() {
    this.showInvestigationCreate = true;
    this.showInvestigationUpdate = false;
    this.showInvestigationDetails = false;
    this.currentInvestigation.next(null);
  }

  closeInvestigationCreate() {
    this.showInvestigationCreate = false;
  }

  createInvestigation(){
    let title : string = this.CreateInvestigationForm.get('create_title')?.value;
    let description : string = this.CreateInvestigationForm.get('create_description')?.value;
    let explanation : string = this.CreateInvestigationForm.get('create_explanation')?.value;
    let board_type : string = this.CreateInvestigationForm.get('create_board_type')?.value;
    console.log(title, description, explanation, board_type);
    // @ts-ignore
    this.AdminService.newInvestigation(title, description, explanation, board_type)
      .subscribe(() => {
        this.investigations = this.investigationService.getAllInvestigations();
      });
  }

  //TODO : functions link Media and Website


  //TODO : Media and Website actions

  // ============================================
  //           Website Actions
  // ============================================

  openWebsiteDetails() {
    this.showWebsiteDetails = true;
    this.showWebsiteUpdate = false;
    this.showWebsiteCreate = false;
  }

  closeWebsiteDetails() {
    this.showWebsiteDetails = false;
  }

  openWebsiteUpdate() {
    this.showWebsiteUpdate = true;
    this.showWebsiteCreate = false;
    this.showWebsiteDetails = false;
    if (this.currentWebsite.getValue() != null){
      this.UpdateWebsiteForm.setValue({
        // @ts-ignore
        update_title: this.currentWebsite.getValue().title,
        // @ts-ignore
        update_description: this.currentWebsite.getValue().description,
        // @ts-ignore
        update_url: this.currentWebsite.getValue().url
      });
    }
  }

  closeWebsiteUpdate() {
    this.showWebsiteUpdate = false;
  }

  openWebsiteCreate() {
    this.showWebsiteCreate = true;
    this.showWebsiteUpdate = false;
    this.showWebsiteDetails = false;
    this.currentWebsite.next(null);
  }

  closeWebsiteCreate() {
    this.showWebsiteCreate = false;
  }

}
