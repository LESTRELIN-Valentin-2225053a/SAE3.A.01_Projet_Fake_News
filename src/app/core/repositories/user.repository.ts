import {Observable} from "rxjs";
import {UserModel} from "../domain/user.model";

/**
 * Abstract class representing a repository for user-related operations.
 */
export abstract class UserRepository {
  /**
   * Logs a user into the system.
   * @param email The email address of the user.
   * @param password The password of the user.
   * @returns An observable of the user model if login is successful, otherwise undefined.
   */
  abstract login(email: string, password: string): Observable<UserModel | undefined>;

  /**
   * Registers a new user.
   * @param name The name of the user.
   * @param email The email address of the user.
   * @param password The password of the user.
   * @returns An observable of the user model if registration is successful, otherwise undefined.
   */
  abstract register(name: string, email: string, password: string): Observable<UserModel | undefined>;

  /**
   * Logs the current user out of the system.
   * @returns An observable indicating whether logout was successful.
   */
  abstract logout(): Observable<boolean>;

  /**
   * Retrieves the currently logged-in user.
   * @returns An observable of the user model if the user is logged in, otherwise undefined.
   */
  abstract getLoggedUser(): Observable<UserModel | undefined>;

  /**
   * Retrieves all users.
   * @returns An observable array of user models.
   */
  abstract getAllUsers(): Observable<UserModel[]>;

  /**
   * Retrieves a user by their ID.
   * @param id The ID of the user to retrieve.
   * @returns An observable of the user model.
   */
  abstract getUserById(id: number): Observable<UserModel>;

  /**
   * Checks if the current user is an admin.
   * @returns An observable indicating whether the current user is an admin.
   */
  abstract checkAdminStatus(): Observable<boolean>;

  /**
   * Blocks a user by their ID.
   * @param id The ID of the user to block.
   * @returns An observable indicating whether the user was successfully blocked.
   */
  abstract blockUser(id: number): Observable<boolean>;

  /**
   * Unblocks a user by their ID.
   * @param id The ID of the user to unblock.
   * @returns An observable indicating whether the user was successfully unblocked.
   */
  abstract unblockUser(id: number): Observable<boolean>;

  /**
   * Deletes a user by their ID.
   * @param id The ID of the user to delete.
   * @returns An observable indicating whether the user was successfully deleted.
   */
  abstract deleteUser(id: number): Observable<boolean>;

  /**
   * Promotes a user to admin by their ID.
   * @param id The ID of the user to promote.
   * @returns An observable indicating whether the user was successfully promoted.
   */
  abstract promoteUser(id: number): Observable<boolean>;
}

