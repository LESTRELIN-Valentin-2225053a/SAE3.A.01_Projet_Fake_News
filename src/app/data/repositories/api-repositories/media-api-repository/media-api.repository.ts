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

  getAllMedias(): Observable<MediaModel[]> {
    return this.http
      .get<MediaApiEntity[]>(`${this.apiUrl}/media/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getMediaById(id: number): Observable<MediaModel> {
    return this.http
      .get<MediaApiEntity>(`${this.apiUrl}/media/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getMediasByInvestigationId(id: number): Observable<MediaModel[]> {
    return this.http
      .get<MediaApiEntity[]>(`${this.apiUrl}/guest/investigation/${id}/medias`)
      .pipe(map(this.mapper.mapFromList));
  }

  getMediasByInvestigationIdForUser(id: number): Observable<MediaModel[]> {
    return this.http
      .get<MediaApiEntity[]>(`${this.apiUrl}/user/investigation/${id}/medias`,{withCredentials: true})
      .pipe(map(this.mapper.mapFromList));
  }

  updateMediasByInvestigationIdForUser(id: number, medias: MediaModel[]): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/user/investigation/${id}/medias/save`,this.mapper.mapToList(medias),{withCredentials: true})
      .pipe(map(() => true),
        catchError(() => { return of(false); }));
  }
}
