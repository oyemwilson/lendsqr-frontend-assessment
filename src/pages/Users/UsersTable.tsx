import { useNavigate } from "react-router-dom";
import type { User } from "../../types/user";
import { saveUser } from "../../utils/storage";

type Props = {
  users: User[];
  onToggleFilter: () => void;
};

const UsersTable = ({ users, onToggleFilter }: Props) => {
  const navigate = useNavigate();

  return (
<div className="users__table-wrapper">
  <div className="users__mobile-filter">
    <button className="mobile-filter-btn" onClick={onToggleFilter}>
      Filter
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18M6 12h12M10 19h4" stroke="#545F7D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  </div>

  <table className="users__table">

        <thead>
          <tr>
            {[
              "Organization",
              "Username",
              "Email",
              "Phone",
              "Date Joined",
              "Status",
            ].map(label => (
              <th key={label}>
                {label}
                <button
                  className="filter-btn"
                  onClick={e => {
                    e.stopPropagation();
                    onToggleFilter();
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 5h18M6 12h12M10 19h4"
                      stroke="#545F7D"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr
              key={user.id}
              onClick={() => {
                saveUser(user);
                navigate(`/users/${user.id}`);
              }}
            >
<td data-label="Organization">{user.org}</td>
<td data-label="Username">{user.fullName}</td>
<td data-label="Email">{user.email}</td>
<td data-label="Phone">{user.phone}</td>
<td data-label="Date Joined">
  {new Date(user.createdAt).toLocaleDateString()}
</td>
<td data-label="Status">
  <span className={`status status--${user.status.toLowerCase()}`}>
    {user.status}
  </span>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
