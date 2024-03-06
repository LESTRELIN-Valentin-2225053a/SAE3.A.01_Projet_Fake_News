/**
 * Represents the data structure for website entities received from API requests.
 * Contains information about a website, such as its ID, title, link, and icon.
 */
export interface WebsiteApiEntity {
  /** The ID of the website. */
  id: number;

  /** The title of the website. */
  title: string;

  /** The link to the website. */
  link: string;

  /** The icon associated with the website. */
  icon: string;
}
