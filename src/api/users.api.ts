import axios from "axios";
import type { User } from "../types/user";

const USERS_API_URL = import.meta.env.VITE_USERS_API;

if (!USERS_API_URL) {
  throw new Error("VITE_USERS_API is not defined in your .env file");
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(USERS_API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
