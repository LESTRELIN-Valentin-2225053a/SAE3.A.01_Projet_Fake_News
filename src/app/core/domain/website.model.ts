/**
 * Represents a website in the system.
 */
export interface WebsiteModel {
  /** The unique identifier of the website. */
  id: number;

  /** The title of the website. */
  title: string;

  /** The link to the website. */
  link: string;

  /** The icon associated with the website. */
  icon: string;
}
