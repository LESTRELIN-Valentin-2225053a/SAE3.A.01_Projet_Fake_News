/**
 * Represents the data structure for media location entities received from API requests.
 * Contains information about a media location, such as its ID, description, and coordinates.
 * Optionally includes details about the associated media.
 */
export interface MediaLocationApiEntity {

  /** The ID of the media location. */
  id: number;

  /** The ID of the expected media associated with the location. */
  expected_media_id: number;

  /** The description of the media location. */
  description: string;

  /** The x-coordinate of the media location. */
  x: number;

  /** The y-coordinate of the media location. */
  y: number;

  /**
   * Optional ID of the associated media.
   * If provided, indicates the ID of the media associated with the location.
   */
  media_id?: number;

  /**
   * Optional description of the associated media.
   * If provided, describes the associated media.
   */
  media_description?: string;

  /**
   * Optional flag indicating the trustworthiness of the associated media.
   * If provided, specifies whether the associated media is considered trustworthy.
   */
  media_isTrustworthy?: boolean;

  /**
   * Optional type of the associated media.
   * If provided, specifies the type of the associated media (img, video, audio).
   */
  media_type?: 'img' | 'video' | 'audio';

  /**
   * Optional link of the associated media.
   * If provided, contains the link associated with the media.
   */
  media_link?: string;

  /**
   * Optional picture of the associated media.
   * If provided, contains the picture associated with the media.
   */
  media_picture?: string;
}

