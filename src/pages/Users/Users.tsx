import { useState } from "react";
import "./Users.scss";
import { useUsers } from "./useUsers";
import UsersTable from "./UsersTable";
import UsersFilter from "./UsersFilter";

const Users = () => {
  const {
    loading,
    users,
    allUsers,
    filters,
    updateFilters,
    resetFilters,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useUsers();

  const [showFilter, setShowFilter] = useState(false);

  
  if (loading) return <p>Loading users...</p>;

  return (
    <div className="users">
      <h1 className="users__title">Users</h1>

      {/* Stats */}
      <div className="users__stats">
        <div className="stat-card">
          <p className="stat-card__label">Users</p>
          <h3 className="stat-card__value">{allUsers.length}</h3>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Active Users</p>
          <h3 className="stat-card__value">
            {allUsers.filter(u => u.status === "Active").length}
          </h3>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Users with Loans</p>
          <h3 className="stat-card__value">
            {allUsers.filter(u => u.hasLoan).length}
          </h3>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Users with Savings</p>
          <h3 className="stat-card__value">
            {allUsers.filter(u => u.hasSavings).length}
          </h3>
        </div>
      </div>

<div className="users__table-wrapper">
  <UsersTable
    users={users}
    onToggleFilter={() => setShowFilter(prev => !prev)}
  />

  {showFilter && (
    <UsersFilter
      users={allUsers}
      filters={filters}
      onChange={updateFilters}
      onReset={() => {
        resetFilters();
        setShowFilter(false);
      }}
      onApply={() => setShowFilter(false)}
    />
  )}
</div>


      {/* Pagination */}
      <div className="users__pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
