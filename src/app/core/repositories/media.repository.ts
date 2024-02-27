import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";

export abstract class MediaRepository {
  abstract getMediaById(id : number): Observable<MediaModel>;
  abstract getMediasByInvestigationId(id : number): Observable<MediaModel[]>;
  abstract getMediasByInvestigationIdWithSessionId(investigationId : number, sessionId : string): Observable<MediaModel[]>;
  abstract getAllMedias(): Observable<MediaModel[]>;
}
