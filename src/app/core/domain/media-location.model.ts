import {MediaModel} from "./media.model";

/**
 * Represents the model for the location of media within an investigation.
 */
export interface MediaLocationModel {
  /** The unique identifier of the media location. */
  id: number;

  /**
   * The position of the media location on a draggable board.
   * It represents the coordinates (x, y) of the media location.
   */
  pos: {x: number; y: number};

  /**
   * The associated media.
   * This property contains the media contained within the location.
   */
  media?: MediaModel;

  /**
   * The identifier of the expected media.
   * This could be used to check if the associated media matches the expected media.
   */
  expected_media_id: number;

  /** A description or caption for the media location. */
  description: string;
}
