import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";

/**
 * Repository interface for handling medias.
 */
export abstract class MediaRepository {

  /**
   * Retrieves a media by its ID.
   * @param id The ID of the media to retrieve.
   * @returns An observable of the media model.
   */
  abstract getMediaById(id: number): Observable<MediaModel>;

  /**
   * Retrieves all media associated with a specific investigation by its ID.
   * @param id The ID of the investigation.
   * @returns An observable array of media models.
   */
  abstract getMediasByInvestigationId(id: number): Observable<MediaModel[]>;

  /**
   * Updates media associated with a specific investigation for a user.
   * @param id The ID of the investigation.
   * @param medias The array of media models to update.
   * @returns An observable indicating the success of the update operation.
   */
  abstract updateMediasByInvestigationIdForUser(id: number, medias: MediaModel[]): Observable<boolean>;

  /**
   * Retrieves media associated with a specific investigation for a user by its ID.
   * @param id The ID of the investigation.
   * @returns An observable array of media models.
   */
  abstract getMediasByInvestigationIdForUser(id: number): Observable<MediaModel[]>;

  /**
   * Retrieves all media.
   * @returns An observable array of all media models.
   */
  abstract getAllMedias(): Observable<MediaModel[]>;
}
