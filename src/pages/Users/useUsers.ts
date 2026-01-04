import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "../../api/users.api";
import type { User } from "../../types/user";

export type UserFilters = {
  org: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
};

const DEFAULT_FILTERS: UserFilters = {
  org: "",
  username: "",
  email: "",
  date: "",
  phone: "",
  status: "",
};

const ITEMS_PER_PAGE = 20;

export const useUsers = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [filters, setFilters] = useState<UserFilters>(DEFAULT_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch users
  useEffect(() => {
    fetchUsers()
      .then(data => setAllUsers(data))
      .finally(() => setLoading(false));
  }, []);

  // Apply filters
  const filteredUsers = useMemo(() => {
    return allUsers.filter(user => {
      return (
        (!filters.org || user.org === filters.org) &&
        (!filters.username ||
          user.fullName.toLowerCase().includes(filters.username.toLowerCase())) &&
        (!filters.email ||
          user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phone || user.phone.includes(filters.phone)) &&
        (!filters.status || user.status === filters.status)
      );
    });
  }, [allUsers, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const currentUsers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  // Handlers
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setCurrentPage(1);
  };

  const updateFilters = (next: Partial<UserFilters>) => {
    setFilters(prev => ({ ...prev, ...next }));
    setCurrentPage(1);
  };

  return {
    loading,
    users: currentUsers,
    allUsers,
    filteredUsers,
    filters,
    currentPage,
    totalPages,
    setCurrentPage,
    updateFilters,
    resetFilters,
  };
};
