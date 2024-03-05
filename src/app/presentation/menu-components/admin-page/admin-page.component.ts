import {Component, inject, ViewContainerRef} from '@angular/core';

import {InvestigationModel} from "../../../core/domain/investigation.model";
import {MediaModel} from "../../../core/domain/media.model";
import {UserModel} from "../../../core/domain/user.model";
import {WebsiteModel} from "../../../core/domain/website.model";
import {MediaService} from "../../../core/services/media.service";
import {WebsiteService} from "../../../core/services/website.service";
import {InvestigationService} from "../../../core/services/investigation.service";
import {UserService} from "../../../core/services/user.service";
import {BehaviorSubject, map, Observable} from "rxjs";
import { AdminService } from '../../../core/services/admin.service';
import {FormControl, FormGroup} from "@angular/forms";
import {BoardAdminComponent} from "../board-admin/board-admin.component";
import {Dialog} from "@angular/cdk/dialog";
@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  // ============================================
  //               General Variables
  // ============================================

  width : number = window.innerWidth*0.75;
  height : number = window.innerHeight*0.75;

  private mediaService: MediaService = inject(MediaService);
  private websiteService: WebsiteService = inject(WebsiteService);
  private investigationService: InvestigationService = inject(InvestigationService);
  private UserService: UserService = inject(UserService);
  private AdminService: AdminService = inject(AdminService);
  private dialog: Dialog = inject(Dialog);
  private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

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

  websitesOfCurrentInvestigation : Observable<WebsiteModel[]> | null= new Observable<WebsiteModel[]>();
  mediasOfCurrentInvestigation : Observable<MediaModel[]> | null= new Observable<MediaModel[]>();

  // ============================================
  //                Tabs
  // ============================================

  //Show the investigation tab
  showInvestigation() {
    this.investigationVisible = true;
    this.usersVisible = false;
    this.mediaVisible = false;
    this.websiteVisible = false;
  }

  //Show the users tab
  showUsers() {
    this.investigationVisible = false;
    this.usersVisible = true;
    this.mediaVisible = false;
    this.websiteVisible = false;
  }

  //Show the media tab
  showMedia() {
    this.investigationVisible = false;
    this.usersVisible = false;
    this.mediaVisible = true;
    this.websiteVisible = false;
  }

  //Show the website tab
  showWebsite() {
    this.investigationVisible = false;
    this.usersVisible = false;
    this.mediaVisible = false;
    this.websiteVisible = true;
  }

  // ============================================
  //           Manage Current Objects
  // ============================================

  //Click on a user to see the actions
  clickUser(user : UserModel){
    this.currentUser.next(user);
    this.currentInvestigation.next(null);
    this.currentMedia.next(null);
    this.currentWebsite.next(null);
  }

  //Click on an investigation to see the actions
  clickInvestigation(investigation : InvestigationModel){
    this.currentInvestigation.next(investigation);
    this.currentMedia.next(null);
    this.currentWebsite.next(null);
    this.currentUser.next(null);
  }

  //Click on a media to see the actions
  clickMedia(media : MediaModel){
    this.currentMedia.next(media);
    this.currentInvestigation.next(null);
    this.currentWebsite.next(null);
    this.currentUser.next(null);
  }

  //Click on a website to see the actions
  clickWebsite(website : WebsiteModel){
    this.currentWebsite.next(website);
    this.currentInvestigation.next(null);
    this.currentMedia.next(null);
    this.currentUser.next(null);
  }

  // ============================================
  //                Users Actions
  // ============================================

  //              User Variables


  //Variables for the user actions and display
  showUserDetails: boolean = false;

  //              User Methods

  //Delete the current user
  deleteCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.deleteUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
        });
    }
  }

  //Promote the current user
  promoteCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.promoteUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
        });
    }
  }

  //Block the current user
  blockCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.blockUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
        });
    }
  }

  //Unblock the current user
  unblockCurrentUser(){
    if (this.currentUser.getValue() != null){
      // @ts-ignore
      this.AdminService.unblockUser(this.currentUser.getValue().id)
        .subscribe(() => {
          this.users = this.UserService.getAllUsers();
      });
    }
  }

  //Show the details of the user
  openUserDetails() {
    this.showUserDetails = true;
  }

  //Close the details of the user
  closeUserDetails() {
    this.showUserDetails = false;
  }

  // ============================================
  //           Investigation Actions
  // ============================================

  //              Investigation Variables

  //Details
  //Show the details of the investigation
  showInvestigationDetails: boolean = false;
  //Show the medias of the investigation
  showInvestigationMedia: boolean = false;
  //Show the websites of the investigation
  showInvestigationWebsite: boolean = false;

  //Update
  //Show the update form of the investigation
  showInvestigationUpdate: boolean = false;
  //Form for the update of the investigation
  UpdateInvestigationForm: FormGroup = new FormGroup({
    update_title: new FormControl(''),
    update_description: new FormControl(''),
    update_explanation: new FormControl(''),
    update_board_type: new FormControl('')
  });

  //Create
  //Show the create form of the investigation
  showInvestigationCreate: boolean = false;
  //Form for the creation of the investigation
  CreateInvestigationForm: FormGroup = new FormGroup({
    create_title: new FormControl(''),
    create_description: new FormControl(''),
    create_explanation: new FormControl(''),
    create_board_type: new FormControl('')
  });

  //AddMedia
  //Show the adding media display
  showAddMedia: boolean = false;
  //Form for the adding of the media
  AddMediaForm: FormGroup = new FormGroup({
    media_id: new FormControl(''),
    PosX : new FormControl(''),
    PosY : new FormControl('')
  });
  AddMediaLocationForm: FormGroup = new FormGroup({
    PosX : new FormControl(''),
    PosY : new FormControl('')
  });

  //RemoveMedia
  //Show the removing media display
  showRemoveMedia: boolean = false;
  //Form for the removing of the media
  RemoveMediaForm: FormGroup = new FormGroup({
    media_id: new FormControl('')
  });

  //AddWebsite
  //Show the adding website display
  showAddWebsite: boolean = false;
  //Form for the adding of the website
  AddWebsiteForm: FormGroup = new FormGroup({
    website_id: new FormControl('')
  });

  //RemoveWebsite
  //Show the removing website display
  showRemoveWebsite: boolean = false;
  //Form for the removing of the website
  RemoveWebsiteForm: FormGroup = new FormGroup({
    website_id: new FormControl('')
  });

  //              Investigation Methods

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
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
  }

  openInvestigationMedias() {
    this.mediasOfCurrentInvestigation = this.mediaService
      .getMediasByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
    this.showInvestigationMedia = true;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
  }

  openInvestigationWebsites() {
    this.websitesOfCurrentInvestigation = this.websiteService
      .getWebsitesByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
    this.showInvestigationWebsite = true;
    this.showInvestigationMedia = false;
    this.showAddWebsite = false;
  }

  closeInvestigationMedias() {
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
  }

  closeInvestigationWebsites() {
    this.showInvestigationWebsite = false;
    this.showInvestigationMedia = false;
    this.showAddWebsite = false;
  }

  closeInvestigationDetails() {
    this.showInvestigationDetails = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
  }

  openInvestigationUpdate() {
    this.showInvestigationUpdate = true;
    this.showInvestigationCreate = false;
    this.showInvestigationDetails = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
    if (this.currentInvestigation.getValue() != null){
      this.UpdateInvestigationForm.setValue({
        // @ts-ignore
        update_title: this.currentInvestigation.getValue()?.title,
        // @ts-ignore
        update_description: this.currentInvestigation.getValue()?.description,
        // @ts-ignore
        update_explanation: this.currentInvestigation.getValue()?.explanation,
        // @ts-ignore
        update_board_type: this.currentInvestigation.getValue()?.board_type
      });
    }
  }

  closeInvestigationUpdate() {
    this.showInvestigationUpdate = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
  }

  updateCurrentInvestigation(){
    console.log(this.UpdateInvestigationForm.value);
    if (this.currentInvestigation.getValue() != null){
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
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
    this.currentInvestigation.next(null);
  }

  closeInvestigationCreate() {
    this.showInvestigationCreate = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showAddWebsite = false;
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

  //TODO : functions link Media

  openAddMedia() {
    this.showAddMedia = true;
    this.showInvestigationDetails = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showInvestigationCreate = false;
    this.showInvestigationUpdate = false;
    this.mediasOfCurrentInvestigation = this.mediaService
      .getMediasByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
  }

  closeAddMedia() {
    this.showAddMedia = false;
  }

  OpenDialogForPos(){
    let media_id : number = this.AddMediaForm.get('media_id')?.value;
    this.mediaService.getMediaById(media_id).subscribe((value) => {
      this.dialog.open(BoardAdminComponent, {
        data : {media : value, investigation : this.currentInvestigation.getValue()},
        viewContainerRef: this.viewContainerRef
      });
    });

  }

  linkMediaToInvestigation(){
    let media_id : number = this.AddMediaForm.get('media_id')?.value;
    let media : BehaviorSubject<MediaModel | null> = new BehaviorSubject<MediaModel | null>(null);
    this.mediaService.getMediaById(media_id).subscribe((value) => {
      media.next(value);
    });
    let PosX : string = this.AddMediaLocationForm.get('PosX')?.value;
    let PosY : string = this.AddMediaLocationForm.get('PosY')?.value;
    let formDATA = new FormData();
    formDATA.append('PosX', PosX);
    formDATA.append('PosY', PosY);
    if (this.currentInvestigation.getValue() != null){
      if (this.currentInvestigation.getValue()?.board_type == "DRAGGABLE"
      && media.getValue()?.trustWorthy == true){
        formDATA.append('LocationPosX', this.AddMediaLocationForm.get('PosX')?.value);
        formDATA.append('LocationPosY', this.AddMediaLocationForm.get('PosY')?.value);
      }
      // @ts-ignore
      let investigation_id : number = this.currentInvestigation.getValue().id;
      this.AdminService.linkMediaToInvestigation(investigation_id, media_id, formDATA)
        .subscribe(() => {
          this.mediasOfCurrentInvestigation = this.mediaService
            .getMediasByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
        });
    }
  }

  openRemoveMedia() {
    this.showRemoveMedia = true;
    this.showAddMedia = false;
    this.showInvestigationDetails = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showInvestigationCreate = false;
    this.showInvestigationUpdate = false;
    this.mediasOfCurrentInvestigation = this.mediaService
      .getMediasByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
  }

  closeRemoveMedia() {
    this.showRemoveMedia = false;
  }

  removeMediaFromInvestigation(media : MediaModel){
    let media_id : number = this.RemoveMediaForm.get('media_id')?.value;
    if (this.currentInvestigation.getValue() != null){
      // @ts-ignore
      let investigation_id : number = this.currentInvestigation.getValue().id;
      this.AdminService.removeMediaFromInvestigation(investigation_id, media_id)
        .subscribe(() => {
          this.mediasOfCurrentInvestigation = this.mediaService
            .getMediasByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
        });
    }
  }

  openAddWebsite() {
    this.showAddWebsite = true;
    this.showAddMedia = false;
    this.showInvestigationDetails = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showInvestigationCreate = false;
    this.showInvestigationUpdate = false;
    this.websitesOfCurrentInvestigation = this.websiteService
      .getWebsitesByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
  }

  closeAddWebsite() {
    this.showAddWebsite = false;
  }

  linkWebsiteToInvestigation(){
    let website_id : number = this.AddWebsiteForm.get('website_id')?.value;
    if (this.currentInvestigation.getValue() != null){
      // @ts-ignore
      let investigation_id : number = this.currentInvestigation.getValue().id;
      this.AdminService.linkWebsiteToInvestigation(investigation_id, website_id)
        .subscribe(() => {
          this.websitesOfCurrentInvestigation = this.websiteService
            .getWebsitesByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
        });
    }
  }

  openRemoveWebsite() {
    this.showRemoveWebsite = true;
    this.showAddMedia = false;
    this.showInvestigationDetails = false;
    this.showInvestigationMedia = false;
    this.showInvestigationWebsite = false;
    this.showInvestigationCreate = false;
    this.showInvestigationUpdate = false;
    this.websitesOfCurrentInvestigation = this.websiteService
      .getWebsitesByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
  }

  closeRemoveWebsite() {
    this.showRemoveWebsite = false;
  }

  removeWebsiteFromInvestigation(){
    let website_id : number = this.RemoveWebsiteForm.get('website_id')?.value;
    if (this.currentInvestigation.getValue() != null){
      // @ts-ignore
      let investigation_id : number = this.currentInvestigation.getValue().id;
      this.AdminService.removeWebsiteFromInvestigation(investigation_id, website_id)
        .subscribe(() => {
          this.websitesOfCurrentInvestigation = this.websiteService
            .getWebsitesByInvestigationId(<number>this.currentInvestigation.getValue()?.id);
        });
    }
  }


  // ============================================
  //           Website Actions
  // ============================================

  //              Website Variables

  //Variables for the website actions and display
  showWebsiteDetails: boolean = false;
  showWebsiteUpdate: boolean = false;
  showWebsiteCreate: boolean = false;
  UpdateWebsiteForm: FormGroup = new FormGroup({
    update_title_website: new FormControl(''),
    update_link_website: new FormControl('')
    //update_icon est un fichier
  });
  UpdateIcon : File = new File([], "NoFiles");
  CreateWebsiteForm: FormGroup = new FormGroup({
    create_title_w: new FormControl(''),
    create_link_w: new FormControl('')
  });
  CreateIcon : File = new File([], "NoFiles");

  constructor() {
    this.investigations = this.investigationService.getAllInvestigations();
    this.medias =  this.mediaService.getAllMedias();
    this.websites = this.websiteService.getAllWebsites();
    this.users = this.UserService.getAllUsers();
  }

  //              Website Methods

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
        update_title_website: this.currentWebsite.getValue()?.title,
        // @ts-ignore
        update_link_website: this.currentWebsite.getValue()?.link
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

  deleteCurrentWebsite(){
    if (this.currentWebsite.getValue() != null){
      // @ts-ignore
      this.AdminService.deleteWebsite(this.currentWebsite.getValue().id)
        .subscribe(() => {
          this.websites = this.websiteService.getAllWebsites();
      });
    }
  }

  createWebsite(){
    let title : string = this.CreateWebsiteForm.get('create_title_w')?.value;
    let url : string = this.CreateWebsiteForm.get('create_link_w')?.value;
    if (title== "" || url == "" || title == null || url == null || this.CreateIcon.name == "NoFiles"){
      console.error('Veuillez remplir tous les champs.');
      return;
    }
    else {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('link', url);
      formData.append('icon', this.CreateIcon);
      console.log(title, url, this.CreateIcon);
      // @ts-ignore
      this.AdminService.newWebsite(formData)
        .subscribe(() => {
          this.websites = this.websiteService.getAllWebsites();
        });
    }
  }
  CreateOnFileSelected(event: Event) {
    // @ts-ignore
    this.CreateIcon = event.target.files[0];
  }

  updateCurrentWebsite(){
    if (this.currentWebsite.getValue() != null){
      let title : string = this.UpdateWebsiteForm.get('update_title_website')?.value;
      let url : string = this.UpdateWebsiteForm.get('update_link_website')?.value;
      const formData = new FormData();
      formData.append('title', title);
      formData.append('link', url);
      if (this.UpdateIcon.name != "NoFiles"){
        formData.append('icon', this.UpdateIcon);
      }
      // @ts-ignore
      let id : number = this.currentWebsite.getValue().id;
      this.AdminService.updateWebsite(id, formData)
        .subscribe(() => {
          this.websites = this.websiteService.getAllWebsites();
        });
    }
  }

  updateOnFileSelected(event: Event) {
    // @ts-ignore
    this.UpdateIcon = event.target.files[0];
  }

  // ============================================
  //                Media Actions
  // ============================================

  //              Media Variables

  //Variables for the media actions and display
  showMediaDetails: boolean = false;
  showMediaUpdate: boolean = false;
  showMediaCreate: boolean = false;

  UpdateMediaForm: FormGroup = new FormGroup({
    update_description_media: new FormControl(''),
    update_isTrustworthy_media: new FormControl(''),
    update_type_media: new FormControl('')
  });
  UpdtaePictureMedia : File = new File([], "NoFiles");
  UpdateLinkMedia : File = new File([], "NoFiles");

  CreateMediaForm: FormGroup = new FormGroup({
    create_description_media: new FormControl(''),
    create_isTrustworthy_media: new FormControl(''),
    create_type_media: new FormControl('')
  });
  CreatePictureMedia : File = new File([], "NoFiles");
  CreateLinkMedia : File = new File([], "NoFiles");


  //              Media Methods

  openMediaDetails() {
    this.showMediaDetails = true;
    this.showMediaUpdate = false;
    this.showMediaCreate = false;
    console.log(this.currentMedia.getValue());
  }

  closeMediaDetails() {
    this.showMediaDetails = false;
  }

  openMediaUpdate() {
    this.showMediaUpdate = true;
    this.showMediaCreate = false;
    this.showMediaDetails = false;
    if (this.currentMedia.getValue() != null){
      this.UpdateMediaForm.setValue({
        // @ts-ignore
        update_description_media: this.currentMedia.getValue()?.description,
        // @ts-ignore
        update_isTrustworthy_media: this.currentMedia.getValue()?.trustWorthy,
        // @ts-ignore
        update_type_media: this.currentMedia.getValue()?.type
      });
    }
  }

  closeMediaUpdate() {
    this.showMediaUpdate = false;
  }

  openMediaCreate() {
    this.showMediaCreate = true;
    this.showMediaUpdate = false;
    this.showMediaDetails = false;
    this.currentMedia.next(null);
  }

  closeMediaCreate() {
    this.showMediaCreate = false;
  }

  deleteCurrentMedia(){
    if (this.currentMedia.getValue() != null){
      // @ts-ignore
      this.AdminService.deleteMedia(this.currentMedia.getValue().id)
        .subscribe(() => {
          this.medias = this.mediaService.getAllMedias();
      });
    }
  }

  createMedia(){
    let description : string = this.CreateMediaForm.get('create_description_media')?.value;
    let isTrustworthy : boolean = this.CreateMediaForm.get('create_isTrustworthy_media')?.value;
    let type : string = this.CreateMediaForm.get('create_type_media')?.value;
    if (description== "" || type == "" || description == null || type == null || this.CreatePictureMedia.name == "NoFiles" || this.CreateLinkMedia.name == "NoFiles"){
      console.error('Veuillez remplir tous les champs.');
      return;
    }
    else {
      const formDataFirstRequest = new FormData();
      formDataFirstRequest.append('description', description);
      if(isTrustworthy){
        formDataFirstRequest.append('isTrustworthy', "1");
      } else{
        formDataFirstRequest.append('isTrustworthy', "0");
      }
      formDataFirstRequest.append('type', type);
      formDataFirstRequest.append('picture', this.CreatePictureMedia);
      this.AdminService.newMedia(formDataFirstRequest)
        .subscribe(() => {
          this.medias = this.mediaService.getAllMedias();
        });
      const formDataSecond = new FormData();
      formDataSecond.append('link', this.CreateLinkMedia);
      this.AdminService.addingLinkFileToMedia(1, formDataSecond)
        .subscribe(() => {
          this.medias = this.mediaService.getAllMedias();
        });
    }
  }

  CreatePictureOnFileSelected(event: Event) {
    // @ts-ignore
    this.CreatePictureMedia = event.target.files[0];
  }

  CreateLinkOnFileSelected(event: Event) {
    // @ts-ignore
    this.CreateLinkMedia = event.target.files[0];
  }

  updateCurrentMedia(){
    if (this.currentMedia.getValue() != null){
      let description : string = this.UpdateMediaForm.get('update_description_media')?.value;
      let isTrustworthy : boolean = this.UpdateMediaForm.get('update_isTrustworthy_media')?.value;
      let type : string = this.UpdateMediaForm.get('update_type_media')?.value;
      const formDataFirstRequest = new FormData();
      formDataFirstRequest.append('description', description);
      if(isTrustworthy){
        formDataFirstRequest.append('isTrustworthy', "1");
      } else{
        formDataFirstRequest.append('isTrustworthy', "0");
      }
      formDataFirstRequest.append('type', type);
      if (this.UpdtaePictureMedia.name != "NoFiles"){
        formDataFirstRequest.append('picture', this.UpdtaePictureMedia);
      }
      // @ts-ignore
      let id : number = this.currentMedia.getValue().id;
      this.AdminService.updateMedia(id, formDataFirstRequest)
        .subscribe(() => {
          this.medias = this.mediaService.getAllMedias();
        });
      const formDataSecond = new FormData();
      if (this.UpdateLinkMedia.name != "NoFiles"){
        formDataSecond.append('link', this.UpdateLinkMedia);
        this.AdminService.addingLinkFileToMedia(id, formDataSecond)
          .subscribe(() => {
            this.medias = this.mediaService.getAllMedias();
          });
      }
    }
  }

  UpdatePictureOnFileSelected(event: Event) {
    // @ts-ignore
    this.UpdtaePictureMedia = event.target.files[0];
  }

  UpdateLinkOnFileSelected(event: Event) {
    // @ts-ignore
    this.UpdateLinkMedia = event.target.files[0];
  }
}
