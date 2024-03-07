import {ApiRepository} from "../api.repository";
import {MediaLocationRepository} from "../../../../core/repositories/media-location.repository";
import {catchError, map, Observable, of} from "rxjs";
import {MediaLocationModel} from "../../../../core/domain/media-location.model";
import {MediaLocationApiEntity} from "./media-location-api-entity";
import {MediaLocationApiRepositoryMapper} from "./media-location-api-repository.mapper";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MediaLocationApiRepository extends ApiRepository implements MediaLocationRepository{

  /** Mapper instance for mapping between API entities and domain models. */
  mapper = new  MediaLocationApiRepositoryMapper();

  /**
   * @inheritDoc
   */
  getAllMediaLocations(): Observable<MediaLocationModel[]> {
    return this.http
      .get<MediaLocationApiEntity[]>(`${this.apiUrl}/mediaLocation/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getMediaLocationById(id: number): Observable<MediaLocationModel> {
    return this.http
      .get<MediaLocationApiEntity>(`${this.apiUrl}/mediaLocation/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  getMediaLocationsByInvestigationId(id: number): Observable<MediaLocationModel[]> {
    return this.http
      .get<MediaLocationApiEntity[]>(`${this.apiUrl}/guest/investigation/${id}/mediaLocations`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getMediaLocationsByInvestigationIdForUser(id: number): Observable<MediaLocationModel[]> {
    return this.http
        .get<MediaLocationApiEntity[]>(`${this.apiUrl}/user/investigation/${id}/mediaLocations`,{withCredentials: true})
        .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  updateMediaLocationsByInvestigationIdForUser(id: number, mediaLocations: MediaLocationModel[]): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/user/investigation/${id}/mediaLocations/save`,this.mapper.mapToList(mediaLocations),{withCredentials: true})
      .pipe(map(() => true),
        catchError(() => { return of(false); }));
  }
}
