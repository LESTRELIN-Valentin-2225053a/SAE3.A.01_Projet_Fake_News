/**
 * Represents the data structure for investigation entities received from API requests.
 * Contains information about an investigation, such as its title, description, and completion status.
 */
export interface InvestigationApiEntity {
  /** The ID of the investigation. */
  investigation_id: number;

  /** The title of the investigation. */
  title: string;

  /** The description of the investigation. */
  description: string;

  /** The explanation associated with the investigation. */
  explanation: string;

  /**
   * The type of board associated with the investigation.
   * It can be either 'DRAGGABLE' or 'VALIDABLE'.
   */
  board_type: 'DRAGGABLE' | 'VALIDABLE';

  /** Indicates whether the investigation is completed. */
  completion: boolean;
}
