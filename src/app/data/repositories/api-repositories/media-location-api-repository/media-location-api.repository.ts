import {ApiRepository} from "../api.repository";
import {MediaLocationRepository} from "../../../../core/repositories/media-location.repository";
import {map, Observable} from "rxjs";
import {MediaLocationModel} from "../../../../core/domain/media-location.model";
import {MediaLocationApiEntity} from "./media-location-entity";
import {MediaLocationApiRepositoryMapper} from "./media-location-api-repository.mapper";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MediaLocationApiRepository extends ApiRepository implements MediaLocationRepository{
  mapper = new  MediaLocationApiRepositoryMapper();

  getAllMediaLocations(): Observable<MediaLocationModel[]> {
    return this.http
      .get<MediaLocationApiEntity[]>(`${this.apiUrl}/mediaLocation/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getMediaLocationById(id: number): Observable<MediaLocationModel> {
    return this.http
      .get<MediaLocationApiEntity>(`${this.apiUrl}/mediaLocation/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getMediaLocationsByInvestigationId(id: number): Observable<MediaLocationModel[]> {
    return this.http
      .get<MediaLocationApiEntity[]>(`${this.apiUrl}/guest/investigation/${id}/mediaLocations`)
      .pipe(map(this.mapper.mapFromList));
  }

  getMediaLocationsByInvestigationIdForUser(id: number): Observable<MediaLocationModel[]> {
    return this.http
        .get<MediaLocationApiEntity[]>(`${this.apiUrl}/user/investigation/${id}/mediaLocations`,{withCredentials: true})
        .pipe(map(this.mapper.mapFromList));
  }
}
