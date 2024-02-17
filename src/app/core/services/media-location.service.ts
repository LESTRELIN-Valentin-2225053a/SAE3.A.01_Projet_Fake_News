import {Injectable} from "@angular/core";
import {MediaLocationRepository} from "../repositories/media-location.repository";
import {MediaLocationModel} from "../domain/media-location.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MediaLocationService {
  constructor(private mediaLocationRepository: MediaLocationRepository) {
  }

  getAllMediaLocations(): Observable<MediaLocationModel[]> {
    return this.mediaLocationRepository.getAllMediaLocations();
  }

  getMediaLocationsById(id : number): Observable<MediaLocationModel>{
    return this.mediaLocationRepository.getMediaLocationById(id);
  }

  getMediaLocationsByInvestigationId(id : number): Observable<MediaLocationModel[]> {
    return this.mediaLocationRepository.getMediaLocationsByInvestigationId(id);
  }

  getMediaLocationsByInvestigationIdAndUserId(investigationId : number, userId : number): Observable<MediaLocationModel[]> {
    return this.mediaLocationRepository.getMediaLocationsByInvestigationIdAndUserId(investigationId,userId);
  }
}
