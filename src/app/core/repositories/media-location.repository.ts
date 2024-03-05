import {Observable} from "rxjs";
import {MediaLocationModel} from "../domain/media-location.model";

/**
 * Repository interface for handling media locations.
 */
export abstract class MediaLocationRepository {
  /**
   * Retrieves a media location by its ID.
   * @param id The ID of the media location to retrieve.
   * @returns An observable of the media location model.
   */
  abstract getMediaLocationById(id: number): Observable<MediaLocationModel>;

  /**
   * Retrieves all media locations associated with a specific investigation by its ID.
   * @param id The ID of the investigation.
   * @returns An observable array of media location models.
   */
  abstract getMediaLocationsByInvestigationId(id: number): Observable<MediaLocationModel[]>;

  /**
   * Retrieves media locations associated with a specific investigation for a user by its ID.
   * @param id The ID of the investigation.
   * @returns An observable array of media location models.
   */
  abstract getMediaLocationsByInvestigationIdForUser(id: number): Observable<MediaLocationModel[]>;

  /**
   * Updates media locations associated with a specific investigation for a user.
   * @param id The ID of the investigation.
   * @param mediaLocations The array of media location models to update.
   * @returns An observable indicating the success of the update operation.
   */
  abstract updateMediaLocationsByInvestigationIdForUser(id: number, mediaLocations: MediaLocationModel[]): Observable<boolean>;

  /**
   * Retrieves all media locations.
   * @returns An observable array of all media location models.
   */
  abstract getAllMediaLocations(): Observable<MediaLocationModel[]>;
}
