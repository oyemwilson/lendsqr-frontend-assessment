export type UserStatus = "Active" | "Inactive" | "Pending" | "Blacklisted";

export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  status: UserStatus;
  org: string;
  createdAt: string;
}
