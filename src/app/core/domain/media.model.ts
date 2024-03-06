/**
 * Represents the model for media used in an investigation.
 */
export interface MediaModel {
  /** The unique identifier of the media. */
  id: number;

  /** A description or caption for the media. */
  description: string;

  /** Indicates whether the media is considered trustworthy or not. */
  trustWorthy: boolean;

  /**
   * Indicates whether the user trusts the media.
   * This property is optional and may not be present in all instances of MediaModel.
   */
  userTrustWorthy?: boolean;

  /** The type of media. It can be one of 'img', 'video', or 'audio'. */
  type: 'img' | 'video' | 'audio';

  /** The link or URL to access the media. */
  link: string;

  /**
   * The picture associated with the media.
   * This could be a thumbnail or any other representation of the media.
   */
  picture: string;

  /**
   * The position of the media on a board.
   * It represents the coordinates (x, y) of the media element.
   */
  pos: {x: number; y: number};
}
