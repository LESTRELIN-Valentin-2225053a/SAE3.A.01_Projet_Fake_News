export interface UserModel {
  id: number,
  name: string,
  email: string,
  isAdmin: boolean,
  isBlocked: boolean,
  created_at: Date,
  updated_at: Date,
}
