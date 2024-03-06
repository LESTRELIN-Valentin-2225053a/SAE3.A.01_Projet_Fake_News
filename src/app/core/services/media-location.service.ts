import {Injectable} from "@angular/core";
import {MediaLocationRepository} from "../repositories/media-location.repository";
import {MediaLocationModel} from "../domain/media-location.model";
import {Observable} from "rxjs";

/**
 * The MediaLocationService provides methods to retrieve and manipulate media location data.
 * It interacts with a MediaLocationRepository to perform data operations.
 */
@Injectable({
  providedIn: 'root'
})
export class MediaLocationService {
  /**
   * Constructs the MediaLocationService with the provided MediaLocationRepository dependency.
   * @param mediaLocationRepository The repository used to interact with media location data.
   */
  constructor(private mediaLocationRepository: MediaLocationRepository) {
  }

  /**
   * Retrieves all media locations.
   * @returns An Observable emitting an array of MediaLocationModel objects.
   */
  getAllMediaLocations(): Observable<MediaLocationModel[]> {
    return this.mediaLocationRepository.getAllMediaLocations();
  }

  /**
   * Retrieves a media location by its ID.
   * @param id The ID of the media location to retrieve.
   * @returns An Observable emitting the retrieved MediaLocationModel.
   */
  getMediaLocationsById(id : number): Observable<MediaLocationModel>{
    return this.mediaLocationRepository.getMediaLocationById(id);
  }

  /**
   * Retrieves all media locations associated with a specific investigation.
   * @param id The ID of the investigation.
   * @returns An Observable emitting an array of MediaLocationModel objects.
   */
  getMediaLocationsByInvestigationId(id : number): Observable<MediaLocationModel[]> {
    return this.mediaLocationRepository.getMediaLocationsByInvestigationId(id);
  }

  /**
   * Retrieves media locations associated with a specific investigation for the current user.
   * @param id The ID of the investigation.
   * @returns An Observable emitting an array of MediaLocationModel objects.
   */
  getMediaLocationsByInvestigationIdForUser(id : number): Observable<MediaLocationModel[]> {
    return this.mediaLocationRepository.getMediaLocationsByInvestigationIdForUser(id);
  }

  /**
   * Updates media locations associated with a specific investigation for the current user.
   * @param id The ID of the investigation.
   * @param mediaLocations The array of MediaLocationModel objects to update.
   * @returns An Observable emitting true if the operation was successful, false otherwise.
   */
  updateMediaLocationsByInvestigationIdForUser(id : number, mediaLocations : MediaLocationModel[]): Observable<boolean> {
    return this.mediaLocationRepository.updateMediaLocationsByInvestigationIdForUser(id,mediaLocations);
  }

  /**
   * Checks if the media location values are correct.
   * @param mediaLocations The array of MediaLocationModel objects to check.
   * @returns True if all media location values match the expected media ID, false otherwise.
   */
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
