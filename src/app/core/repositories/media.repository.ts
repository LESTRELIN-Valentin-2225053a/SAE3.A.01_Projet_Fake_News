import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";

export abstract class MediaRepository {
  abstract getMediaById(id : number): Observable<MediaModel>;
  abstract getMediasByInvestigationId(id : number): Observable<MediaModel[]>;
  abstract getMediasByInvestigationIdForUser(id : number): Observable<MediaModel[]>;
  abstract getAllMedias(): Observable<MediaModel[]>;
}
