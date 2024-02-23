import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";

export interface MediaRepository {
  getMediaById(id : number): Observable<MediaModel>;
  getMediasByInvestigationId(id : number): Observable<MediaModel[]>;
  getMediasByInvestigationIdWithSessionId(investigationId : number, sessionId : string): Observable<MediaModel[]>;
  getAllMedias(): Observable<MediaModel[]>;
}
