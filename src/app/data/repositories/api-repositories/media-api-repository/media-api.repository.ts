import {ApiRepository} from "../api.repository";
import {MediaRepository} from "../../../../core/repositories/media.repository";
import {catchError, map, Observable, of} from "rxjs";
import {MediaModel} from "../../../../core/domain/media.model";
import {MediaApiRepositoryMapper} from "./media-api-repository.mapper";
import {MediaApiEntity} from "./media-api-entity";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MediaApiRepository extends ApiRepository implements MediaRepository{

  /** Mapper instance for mapping between API entities and domain models. */
  mapper = new MediaApiRepositoryMapper();

  /**
   * @inheritDoc
   */
  getAllMedias(): Observable<MediaModel[]> {
    return this.http
      .get<MediaApiEntity[]>(`${this.apiUrl}/media/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getMediaById(id: number): Observable<MediaModel> {
    return this.http
      .get<MediaApiEntity>(`${this.apiUrl}/media/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  getMediasByInvestigationId(id: number): Observable<MediaModel[]> {
    return this.http
      .get<MediaApiEntity[]>(`${this.apiUrl}/guest/investigation/${id}/medias`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getMediasByInvestigationIdForUser(id: number): Observable<MediaModel[]> {
    return this.http
      .get<MediaApiEntity[]>(`${this.apiUrl}/user/investigation/${id}/medias`,{withCredentials: true})
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  updateMediasByInvestigationIdForUser(id: number, medias: MediaModel[]): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/user/investigation/${id}/medias/save`,this.mapper.mapToList(medias),{withCredentials: true})
      .pipe(map(() => true),
        catchError(() => { return of(false); }));
  }

  /**
   * @inheritDoc
   */
  newMedia(formdata: FormData): Observable<MediaModel> {
    return this.http.post<MediaApiEntity>(`${this.apiUrl}/admin/media/new`, formdata, {withCredentials: true})
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  updateMedia(id: number, formdata: FormData): Observable<MediaModel> {
    return this.http
      .post<MediaApiEntity>(`${this.apiUrl}/admin/media/update/${id}`, formdata, {withCredentials: true})
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  addingLinkFileToMedia(id: number, formdata: FormData): Observable<MediaModel> {
    return this.http
      .post<MediaApiEntity>(`${this.apiUrl}/admin/media/${id}/addLinkFile`, formdata, {withCredentials: true})
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  deleteMedia(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiUrl}/admin/media/delete/${id}`, { observe: 'response', withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError(() => {
        return of(false);
      }));
  }
}
