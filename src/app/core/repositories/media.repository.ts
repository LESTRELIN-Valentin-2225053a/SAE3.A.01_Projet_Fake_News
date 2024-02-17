import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";

export interface MediaRepository {
  getMediaById(id : number): Observable<MediaModel>;
  getMediasByInvestigationId(id : number): Observable<MediaModel[]>;
  getMediasByInvestigationIdAndUserId(investigationId : number, userId : number): Observable<MediaModel[]>;
  getAllMedias(): Observable<MediaModel[]>;
}
