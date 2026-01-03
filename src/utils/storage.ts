import type { User } from "../types/user";

export const saveUser = (user: User) => {
  localStorage.setItem("selectedUser", JSON.stringify(user));
};

export const getUser = (): User | null => {
  const raw = localStorage.getItem("selectedUser");
  return raw ? JSON.parse(raw) : null;
};
