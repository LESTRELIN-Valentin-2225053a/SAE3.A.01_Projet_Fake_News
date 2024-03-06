/**
 * Represents the data structure for media entities received from API requests.
 * Contains information about a media item, such as its description, trustworthiness,
 * type, link, picture, and position.
 */
export interface MediaApiEntity {

  /** The ID of the media item. */
  media_id: number;

  /** The description of the media item. */
  description: string;

  /** Indicates whether the media item is trustworthy. */
  isTrustworthy: boolean;

  /**
   * Indicates whether the user considers the media item trustworthy.
   * This field is optional.
   */
  userTrustWorthy?: boolean;

  /**
   * The type of the media item.
   * It can be one of: 'img', 'video', or 'audio'.
   */
  type: 'img' | 'video' | 'audio';

  /** The link to the media item. */
  link: string;

  /** The picture associated with the media item. */
  picture: string;

  /** The X-coordinate position of the media item. */
  posX: number;

  /** The Y-coordinate position of the media item. */
  posY: number;
}

