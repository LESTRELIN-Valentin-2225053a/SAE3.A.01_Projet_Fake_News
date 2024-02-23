import {Observable} from "rxjs";
import {MediaLocationModel} from "../domain/media-location.model";

export interface MediaLocationRepository {
  getMediaLocationById(id : number): Observable<MediaLocationModel>;
  getMediaLocationsByInvestigationId(id : number): Observable<MediaLocationModel[]>;
  getMediaLocationsByInvestigationIdWithSessionId(investigationId : number, sessionId : string): Observable<MediaLocationModel[]>;
  getAllMediaLocations(): Observable<MediaLocationModel[]>;
}
