/**
 * Represents the data structure for user entities received from API requests.
 * Contains information about a user, such as their name, email, and admin status.
 */
export interface UserApiEntity {

  /** The ID of the user. */
  user_id: number;

  /** The name of the user. */
  name: string;

  /** The email address of the user. */
  email: string;

  /** Indicates whether the user has admin privileges. */
  admin: boolean;

  /** Indicates whether the user is blocked. */
  blocked: boolean;

  /** The timestamp indicating when the user was last updated. */
  updated_at: string;

  /** The timestamp indicating when the user was created. */
  created_at: string;
}
