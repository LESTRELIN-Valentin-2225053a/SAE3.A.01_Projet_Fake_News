/**
 * Represents a user in the system.
 */
export interface UserModel {
  /** The unique identifier of the user. */
  id: number;

  /** The name of the user. */
  name: string;

  /** The email address of the user. */
  email: string;

  /**
   * Indicates whether the user is an administrator.
   * `true` if the user is an administrator, `false` otherwise.
   */
  isAdmin: boolean;

  /**
   * Indicates whether the user is blocked.
   * `true` if the user is blocked, `false` otherwise.
   */
  isBlocked: boolean;

  /** The date and time when the user account was created. */
  created_at: Date;

  /** The date and time when the user account was last updated. */
  updated_at: Date;
}
