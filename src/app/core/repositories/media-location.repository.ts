import {Observable} from "rxjs";
import {MediaLocationModel} from "../domain/media-location.model";

export abstract class MediaLocationRepository {
  abstract getMediaLocationById(id : number): Observable<MediaLocationModel>;
  abstract getMediaLocationsByInvestigationId(id : number): Observable<MediaLocationModel[]>;
  abstract getMediaLocationsByInvestigationIdForUser(id : number): Observable<MediaLocationModel[]>;
  abstract updateMediaLocationsByInvestigationIdForUser(id : number,mediaLocations : MediaLocationModel[]): Observable<boolean>;
  abstract getAllMediaLocations(): Observable<MediaLocationModel[]>;
}
