import {ApiRepository} from "../api.repository";
import {MediaLocationRepository} from "../../../core/repositories/media-location.repository";
import {map, Observable, of} from "rxjs";
import {MediaLocationModel} from "../../../core/domain/media-location.model";
import {MediaLocationApiEntity} from "./media-location-entity";
import {MediaLocationApiRepositoryMapper} from "./media-location-api-repository.mapper";

export class MediaLocationApiRepository extends ApiRepository implements MediaLocationRepository{
  mapper = new  MediaLocationApiRepositoryMapper();

  getAllMediaLocations(): Observable<MediaLocationModel[]> {
    return of([]);
  }

  getMediaLocationById(id: number): Observable<MediaLocationModel> {
    return of();
  }

  getMediaLocationsByInvestigationId(id: number): Observable<MediaLocationModel[]> {
    return this.http
      .get<MediaLocationApiEntity[]>(`${this.apiUrl}/api/mediaLocation/id/${id}`)
      .pipe(map(this.mapper.mapFromList));
  }

  getMediaLocationsByInvestigationIdWithSessionId(investigationId: number, sessionId: string): Observable<MediaLocationModel[]> {
    return of([]);
  }

}
