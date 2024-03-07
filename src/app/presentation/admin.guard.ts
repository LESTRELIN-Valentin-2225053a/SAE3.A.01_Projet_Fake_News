import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../core/services/auth.service";


/**
 * Guard function to protect routes accessible only to admin users.
 * @returns A function that determines whether the current user is an admin and can access the route.
 */
export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.isAdmin;
};
