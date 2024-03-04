import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";

export abstract class MediaRepository {
  abstract getMediaById(id : number): Observable<MediaModel>;
  abstract getMediasByInvestigationId(id : number): Observable<MediaModel[]>;
  abstract getMediasByInvestigationIdForUser(id : number): Observable<MediaModel[]>;
  abstract getAllMedias(): Observable<MediaModel[]>;
  abstract newMedia(formdata : FormData): Observable<MediaModel>;
  abstract updateMedia(id: number, formdata : FormData): Observable<MediaModel>;
  abstract addingLinkFileToMedia(id: number, formdata : FormData): Observable<MediaModel>;
  abstract deleteMedia(id: number): Observable<boolean>;
}
