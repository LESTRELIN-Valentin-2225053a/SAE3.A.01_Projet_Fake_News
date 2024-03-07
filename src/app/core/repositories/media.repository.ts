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

  /**
   * Adds a new media.
   * @param formdata The form data containing information about the new media.
   * @returns An observable of the newly created media model.
   */
  abstract newMedia(formdata : FormData): Observable<MediaModel>;

  /**
   * Updates a media by its ID.
   * @param id The ID of the media to update.
   * @param formdata The form data containing updated information about the media.
   * @returns An observable of the updated media model.
   */
  abstract updateMedia(id: number, formdata : FormData): Observable<MediaModel>;

  /**
   * Adds a link file to a media.
   * @param id The ID of the media.
   * @param formdata The form data containing information about the link file.
   * @returns An observable of the updated media model.
   */
  abstract addingLinkFileToMedia(id: number, formdata : FormData): Observable<MediaModel>;

  /**
   * Deletes a media by its ID.
   * @param id The ID of the media to delete.
   * @returns An observable indicating whether the delete operation was successful.
   */
  abstract deleteMedia(id: number): Observable<boolean>;
}
