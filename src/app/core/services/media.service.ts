import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";
import {MediaRepository} from "../repositories/media.repository";

/**
 * The MediaService provides methods to retrieve and manipulate media data.
 * It interacts with a MediaRepository to perform data operations.
 */
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  /**
   * Constructs the MediaService.
   * @param mediaRepository The MediaRepository used to interact with media data.
   */
  constructor(private mediaRepository: MediaRepository) {
  }

  /**
   * Retrieves a media by its ID.
   * @param id The ID of the media to retrieve.
   * @returns An Observable emitting the retrieved MediaModel.
   */
  getMediaById(id : number) : Observable<MediaModel> {
    return this.mediaRepository.getMediaById(id);
  }

  /**
   * Retrieves all media associated with a specific investigation.
   * @param id The ID of the investigation.
   * @returns An Observable emitting an array of MediaModel objects.
   */
  getMediasByInvestigationId(id : number): Observable<MediaModel[]> {
    return this.mediaRepository.getMediasByInvestigationId(id);
  }

  /**
   * Retrieves media associated with a specific investigation for the current user.
   * @param id The ID of the investigation.
   * @returns An Observable emitting an array of MediaModel objects.
   */
  getMediasByInvestigationIdForUser(id: number): Observable<MediaModel[]>{
    return this.mediaRepository.getMediasByInvestigationIdForUser(id);
  }

  /**
   * Updates media associated with a specific investigation for the current user.
   * @param id The ID of the investigation.
   * @param medias The array of MediaModel objects to update.
   * @returns An Observable emitting true if the operation was successful, false otherwise.
   */
  updateMediasByInvestigationIdForUser(id: number, medias : MediaModel[]) : Observable<boolean> {
    return this.mediaRepository.updateMediasByInvestigationIdForUser(id,medias);
  }

  /**
   * Retrieves all media.
   * @returns An Observable emitting an array of MediaModel objects.
   */
  getAllMedias(): Observable<MediaModel[]> {
    return this.mediaRepository.getAllMedias();
  }

  /**
   * Checks if the trustworthiness values provided by the user match the actual trustworthiness of the media.
   * @param medias The array of MediaModel objects to check.
   * @returns True if all trustworthiness values provided by the user match the actual trustworthiness, false otherwise.
   */
  checkIfValuesAreCorrect(medias : MediaModel[]){
    if (medias.length === 0) return false;
    let result = true;
    medias.every(media => {
      return result = media.trustWorthy == media.userTrustWorthy;
    });
    return result;
  }
}
