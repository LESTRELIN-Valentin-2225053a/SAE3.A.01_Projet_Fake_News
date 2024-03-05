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

  getMediaLocationsByInvestigationIdForUser(id : number): Observable<MediaLocationModel[]> {
    return this.mediaLocationRepository.getMediaLocationsByInvestigationIdForUser(id);
  }

  updateMediaLocationsByInvestigationIdForUser(id : number, mediaLocations : MediaLocationModel[]): Observable<boolean> {
    return this.mediaLocationRepository.updateMediaLocationsByInvestigationIdForUser(id,mediaLocations);
  }

  checkIfValuesAreCorrect(mediaLocations : MediaLocationModel[]){
    if(mediaLocations.length === 0) return false;
    let result: boolean = true;
    mediaLocations.every(mediaLocation => {
      return result = mediaLocation.media?.id == mediaLocation.expected_media_id;
    });
    console.log(result);
    return result;
  }
}
