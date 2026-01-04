import type { User } from "../../types/user";
import type { UserFilters } from "./useUsers";

type Props = {
  users: User[];
  filters: UserFilters;
  onChange: (next: Partial<UserFilters>) => void;
  onReset: () => void;
  onApply: () => void;
};

const UsersFilter = ({ users, filters, onChange, onReset, onApply }: Props) => {
  const orgOptions = Array.from(new Set(users.map(u => u.org)));

  return (
    <div className="filter">
      <div className="filter__field">
        <label>Organization</label>
        <select
          value={filters.org}
          onChange={e => onChange({ org: e.target.value })}
        >
          <option value="">Select</option>
          {orgOptions.map(org => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="filter__field">
        <label>Username</label>
        <input
          placeholder="User"
          value={filters.username}
          onChange={e => onChange({ username: e.target.value })}
        />
      </div>

      <div className="filter__field">
        <label>Email</label>
        <input
          placeholder="Email"
          value={filters.email}
          onChange={e => onChange({ email: e.target.value })}
        />
      </div>

      <div className="filter__field">
        <label>Date</label>
        <input
          type="date"
          value={filters.date}
          onChange={e => onChange({ date: e.target.value })}
        />
      </div>

      <div className="filter__field">
        <label>Phone Number</label>
        <input
          placeholder="Phone Number"
          value={filters.phone}
          onChange={e => onChange({ phone: e.target.value })}
        />
      </div>

      <div className="filter__field">
        <label>Status</label>
        <select
          value={filters.status}
          onChange={e => onChange({ status: e.target.value })}
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className="filter__actions">
        <button className="btn btn--outline" onClick={onReset}>
          Reset
        </button>
        <button className="btn btn--primary" onClick={onApply}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default UsersFilter;
