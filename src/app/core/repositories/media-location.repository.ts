import {Observable} from "rxjs";
import {MediaLocationModel} from "../domain/media-location.model";

export abstract class MediaLocationRepository {
  abstract getMediaLocationById(id : number): Observable<MediaLocationModel>;
  abstract getMediaLocationsByInvestigationId(id : number): Observable<MediaLocationModel[]>;
  abstract getMediaLocationsByInvestigationIdWithSessionId(investigationId : number, sessionId : string): Observable<MediaLocationModel[]>;
  abstract getAllMediaLocations(): Observable<MediaLocationModel[]>;
}
