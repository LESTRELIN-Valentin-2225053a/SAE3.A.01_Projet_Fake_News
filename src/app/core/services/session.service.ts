import {inject, Injectable} from "@angular/core";
import {MediaService} from "./media.service";
import {MediaLocationService} from "./media-location.service";
import {WebsiteService} from "./website.service";
import {InvestigationService} from "./investigation.service";
import {MediaModel} from "../domain/media.model";
import {BehaviorSubject, catchError, forkJoin, mergeMap, of, tap} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";
import {MediaLocationModel} from "../domain/media-location.model";
import {WebsiteModel} from "../domain/website.model";
import {AuthService} from "./auth.service";
import {ChronometerService} from "./chronometer.service";

/**
 * The SessionService manages the current user session and related data.
 * It provides methods to handle user authentication, current investigation management,
 * and data retrieval for media, media locations, and websites.
 */
@Injectable({
    providedIn: 'root'
})
export class SessionService {
  /** The authentication service instance. */
  private authService: AuthService = inject(AuthService);

  /** The media service instance. */
  private mediaService: MediaService = inject(MediaService);

  /** The media location service instance. */
  private mediaLocationService: MediaLocationService = inject(MediaLocationService);

  /** The website service instance. */
  private websiteService: WebsiteService = inject(WebsiteService);

  /** The investigation service instance. */
  private investigationService: InvestigationService = inject(InvestigationService);

  /** The chronometer service instance. */
  private chronometerService: ChronometerService = inject(ChronometerService);

  /** The session behavior, indicating whether the user is a guest or connected. */
  sessionBehavior : 'GUEST' | 'CONNECTED';

  /** BehaviorSubject representing the current investigation. */
  currentInvestigation: BehaviorSubject<InvestigationModel | null> = new BehaviorSubject<InvestigationModel | null>(null);

  /** BehaviorSubject representing the list of investigations. */
  investigations: BehaviorSubject<InvestigationModel[]> = new BehaviorSubject<InvestigationModel[]>([]);

  /** BehaviorSubject representing the list of media items. */
  medias: BehaviorSubject<MediaModel[]> = new BehaviorSubject<MediaModel[]>([]);

  /** BehaviorSubject representing the list of media locations. */
  mediaLocations: BehaviorSubject<MediaLocationModel[]> = new BehaviorSubject<MediaLocationModel[]>([]);

  /** BehaviorSubject representing the list of websites. */
  websites: BehaviorSubject<WebsiteModel[]> = new BehaviorSubject<WebsiteModel[]>([]);

  /**
   * Constructs a new SessionService instance.
   * Subscribes to the authentication service to determine the session behavior when the user logs in or out.
   */
  constructor() {
    this.authService.isLogged().subscribe(isLogged => {
      if(isLogged) this.setInvestigationsWhenConnected();
      else this.setInvestigationsWhenGuest();
      console.log(this.sessionBehavior);
    })
  }

  /**
   * Checks if an investigation is currently active.
   * @returns True if an investigation is active, otherwise false.
   */
  public isConductingInvestigation() {
    return this.currentInvestigation.value !== null;
  }

  /**
   * Sets up investigations and session behavior when the user is a guest.
   */
  public setInvestigationsWhenGuest() {
    this.investigationService.getAllInvestigations().subscribe(this.investigations);
    this.sessionBehavior = 'GUEST';
  }

  /**
   * Sets up investigations and session behavior when the user is connected.
   */
  public setInvestigationsWhenConnected() {
    this.investigationService.getAllInvestigationsForUser().subscribe(this.investigations);
    this.sessionBehavior = 'CONNECTED';
  }

  /**
   * Retrieves completed investigations.
   * @returns An array of completed InvestigationModel objects.
   */
  public getCompletedInvestigations() : InvestigationModel[] {
    return this.investigations.getValue().filter(investigation => investigation.completion);
  }

  /**
   * Changes the current investigation and its associated medias, media locations and websites.
   * @param investigation The new investigation.
   * @returns An Observable emitting the combined results of media, media locations, and websites retrieval.
   */
  public changeInvestigation(investigation: InvestigationModel) {
    console.log(investigation);
    this.currentInvestigation.next(investigation);
    if (this.sessionBehavior === 'CONNECTED') {
      const sources = [
        this.mediaService.getMediasByInvestigationIdForUser(investigation.id).pipe(
          catchError(() => {return of([]);})
          ,tap(this.medias)),
        this.mediaLocationService.getMediaLocationsByInvestigationIdForUser(investigation.id).pipe(
          catchError(() => {return of([]);})
          ,tap(this.mediaLocations)),
        this.websiteService.getWebsitesByInvestigationId(investigation.id).pipe(
          catchError(() => {return of([]);})
          ,tap(this.websites))
      ]
      return forkJoin(sources);
    } else {
      const sources = [
        this.mediaService.getMediasByInvestigationId(investigation.id).pipe(
          catchError(() => {return of([]);})
          ,tap(this.medias)),
        this.mediaLocationService.getMediaLocationsByInvestigationId(investigation.id).pipe(
          catchError(() => {return of([]);})
          ,tap(this.mediaLocations)),
        this.websiteService.getWebsitesByInvestigationId(investigation.id).pipe(
          catchError(() => {return of([]);})
          ,tap(this.websites))
      ]
      return forkJoin(sources).pipe(tap(() => this.chronometerService.startTimer()));
    }
  }

  /**
   * Restarts the current investigation.
   * @param investigation The investigation to restart.
   * @returns An Observable emitting the combined results of media, media locations, and websites retrieval.
   */
  public restartInvestigation(investigation: InvestigationModel) {
    this.currentInvestigation.next(investigation);
    const sources = [
      this.mediaService.getMediasByInvestigationId(investigation.id).pipe(
        catchError(() => {return of([]);})
        ,tap(this.medias)),
      this.mediaLocationService.getMediaLocationsByInvestigationId(investigation.id).pipe(
        catchError(() => {return of([]);})
        ,tap(this.mediaLocations)),
      this.websiteService.getWebsitesByInvestigationId(investigation.id).pipe(
        catchError(() => {return of([]);})
        ,tap(this.websites))
    ]
    return forkJoin(sources).pipe(tap(() => this.chronometerService.startTimer()));
  }

  /**
   * Saves the progression of the current investigation.
   * @param investigation The investigation to save.
   * @returns An Observable emitting true if the operation was successful, otherwise false.
   */
  public saveCurrentInvestigationProgression(investigation : InvestigationModel) {
    return this.mediaService.updateMediasByInvestigationIdForUser(investigation.id,this.medias.getValue()).pipe(
      mergeMap(() => this.mediaLocationService.updateMediaLocationsByInvestigationIdForUser(investigation.id,this.mediaLocations.getValue()))
    )
  }

  /**
   * Abandons the current investigation.
   */
  public abandonInvestigation(){
    this.currentInvestigation.next(null);
    this.medias.next([]);
    this.mediaLocations.next([]);
    this.websites.next([]);
    this.chronometerService.reset();
  }

  /**
   * Validates the current investigation.
   * @returns True if the investigation is valid, otherwise false.
   */
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
      succeededInvestigation.score = this.investigationService.getInvestigationScore(this.chronometerService.elapsedTime);
      if(this.sessionBehavior === 'CONNECTED')
        this.investigationService.completeInvestigationByIdForUser(succeededInvestigation.id).subscribe();
      this.abandonInvestigation();
    }
    return result;
  }
}
