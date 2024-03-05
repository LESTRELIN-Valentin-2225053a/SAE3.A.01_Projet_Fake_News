/**
 * Represents the model for an investigation.
 */
export interface InvestigationModel {
  /** The unique identifier of the investigation. */
  id: number;

  /** The title of the investigation. */
  title: string;

  /** The description of the investigation. */
  description: string;

  /** Additional explanation or notes about the investigation. */
  explanation: string;

  /**
   * The type of board used in the investigation.
   * It can be either 'DRAGGABLE' or 'VALIDABLE'.
   */
  board_type: 'DRAGGABLE' | 'VALIDABLE';

  /**
   * Indicates whether the investigation has been completed or not.
   * If true, the investigation is considered completed; otherwise, it is incomplete.
   */
  completion: boolean;
}
