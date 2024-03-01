import {ApiRepository} from "../api.repository";
import {MediaRepository} from "../../../../core/repositories/media.repository";
import {map, Observable, of} from "rxjs";
import {MediaModel} from "../../../../core/domain/media.model";
import {MediaApiRepositoryMapper} from "./media-api-repository.mapper";
import {MediaApiEntity} from "./media-api-entity";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MediaApiRepository extends ApiRepository implements MediaRepository{
  mapper = new MediaApiRepositoryMapper();

  // ROUTE A FAIRE
  getAllMedias(): Observable<MediaModel[]> {
    return of([]);
  }

  // ROUTE A FAIRE
  getMediaById(id: number): Observable<MediaModel> {
    return of();
  }

  getMediasByInvestigationId(id: number): Observable<MediaModel[]> {
    return this.http
      .get<MediaApiEntity[]>(`${this.apiUrl}/guest/investigation/${id}/medias`)
      .pipe(map(this.mapper.mapFromList));
  }

  // ROUTE A FAIRE
  getMediasByInvestigationIdWithSessionId(investigationId: number, sessionId: string): Observable<MediaModel[]> {
    return of([]);
  }

}
