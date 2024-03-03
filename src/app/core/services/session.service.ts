import {inject, Injectable} from "@angular/core";
import {MediaService} from "./media.service";
import {MediaLocationService} from "./media-location.service";
import {WebsiteService} from "./website.service";
import {InvestigationService} from "./investigation.service";
import {MediaModel} from "../domain/media.model";
import {BehaviorSubject} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";
import {MediaLocationModel} from "../domain/media-location.model";
import {WebsiteModel} from "../domain/website.model";
import {AuthService} from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class SessionService {
  private authService : AuthService = inject(AuthService);
  private mediaService: MediaService = inject(MediaService);
  private mediaLocationService: MediaLocationService = inject(MediaLocationService);
  private websiteService: WebsiteService = inject(WebsiteService);
  private investigationService: InvestigationService = inject(InvestigationService);

  // currentUser: BehaviorSubject<UserModel | undefined> = new BehaviorSubject<UserModel | undefined>(undefined);
  sessionBehavior : 'GUEST' | 'CONNECTED';

  currentInvestigation: BehaviorSubject<InvestigationModel | null> = new BehaviorSubject<InvestigationModel | null>(null);

  investigations: BehaviorSubject<InvestigationModel[]> = new BehaviorSubject<InvestigationModel[]>([]);

  medias: BehaviorSubject<MediaModel[]> = new BehaviorSubject<MediaModel[]>([]);

  mediaLocations: BehaviorSubject<MediaLocationModel[]> = new BehaviorSubject<MediaLocationModel[]>([]);

  websites: BehaviorSubject<WebsiteModel[]> = new BehaviorSubject<WebsiteModel[]>([]);


  constructor() {
    this.authService.isLogged().subscribe(isLogged => {
      if(isLogged) this.setInvestigationsWhenConnected();
      else this.setInvestigationsWhenGuest();
      console.log(this.sessionBehavior);
    })
  }

  public isConductingInvestigation() {
    return this.currentInvestigation.value !== null;
  }

  public setInvestigationsWhenGuest() {
    this.investigationService.getAllInvestigations().subscribe(this.investigations);
    this.sessionBehavior = 'GUEST';
  }

  public setInvestigationsWhenConnected() {
    this.investigationService.getAllInvestigationsForUser().subscribe(this.investigations);
    this.sessionBehavior = 'CONNECTED';
  }

  public changeInvestigation(investigation: InvestigationModel) {
    console.log(investigation);
    this.currentInvestigation.next(investigation);
    if (this.sessionBehavior === 'CONNECTED') {
      this.mediaService.getMediasByInvestigationIdForUser(investigation.id).subscribe(this.medias);
      this.mediaLocationService.getMediaLocationsByInvestigationIdForUser(investigation.id).subscribe(this.mediaLocations);
      this.websiteService.getWebsitesByInvestigationId(investigation.id).subscribe(this.websites);
    } else {
      this.mediaService.getMediasByInvestigationId(investigation.id).subscribe(this.medias);
      this.mediaLocationService.getMediaLocationsByInvestigationId(investigation.id).subscribe(this.mediaLocations);
      this.websiteService.getWebsitesByInvestigationId(investigation.id).subscribe(this.websites);
    }
  }

  public restartInvestigation(investigation: InvestigationModel) {
    this.currentInvestigation.next(investigation);
    this.mediaService.getMediasByInvestigationId(investigation.id).subscribe(this.medias);
    this.mediaLocationService.getMediaLocationsByInvestigationId(investigation.id).subscribe(this.mediaLocations);
    this.websiteService.getWebsitesByInvestigationId(investigation.id).subscribe(this.websites);
  }

  public abandonInvestigation(){
    this.currentInvestigation.next(null);
    this.medias.next([]);
    this.mediaLocations.next([]);
    this.websites.next([]);
  }

  public validateInvestigation() : boolean {
    let result : boolean = false;
    switch (this.currentInvestigation.getValue()?.board_type){
      case 'DRAGGABLE':
        result = this.mediaLocationService.checkIfValuesAreCorrect(this.mediaLocations.getValue()); break;
      case 'VALIDABLE':
        result = this.mediaService.checkIfValuesAreCorrect(this.medias.getValue()); break;
    }
    if(result && this.currentInvestigation){
      const succeededInvestigation = this.currentInvestigation.getValue() as InvestigationModel;
      succeededInvestigation.completion = true;
      this.abandonInvestigation();
    }
    return result;
  }
}
