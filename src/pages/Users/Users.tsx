import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/users.api";
import type { User } from "../../types/user";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../utils/storage";
import "./Users.scss"

const ITEMS_PER_PAGE = 20;

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = users.slice(start, start + ITEMS_PER_PAGE);

  if (loading) return <p>Loading users...</p>;

  return (
  <div className="users">
    <h1 className="users__title">Users</h1>
<div className="users__stats">
  <div className="stat-card">
    <p className="stat-card__label">Users</p>
    <h3 className="stat-card__value">2,453</h3>
  </div>

  <div className="stat-card">
    <p className="stat-card__label">Active Users</p>
    <h3 className="stat-card__value">2,453</h3>
  </div>

  <div className="stat-card">
    <p className="stat-card__label">Users with Loans</p>
    <h3 className="stat-card__value">12,453</h3>
  </div>

  <div className="stat-card">
    <p className="stat-card__label">Users with Savings</p>
    <h3 className="stat-card__value">102,453</h3>
  </div>
</div>

    <div className="users__table-wrapper">
      <table className="users__table">
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date Joined</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map(user => (
            <tr
              key={user.id}
              onClick={() => {
                saveUser(user);
                navigate(`/users/${user.id}`);
              }}
            >
              <td>{user.org}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                <span className={`status status--${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="users__pagination">
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
        Prev
      </button>
      <span>
        Page {currentPage} of {Math.ceil(users.length / ITEMS_PER_PAGE)}
      </span>
      <button
        disabled={start + ITEMS_PER_PAGE >= users.length}
        onClick={() => setCurrentPage(p => p + 1)}
      >
        Next
      </button>
    </div>
  </div>
);

};

export default Users;
