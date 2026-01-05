import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { User } from "../../types/user";
import { saveUser } from "../../utils/storage";
import EyeIcon from "../../assets/eye.svg?react";
import BlacklistIcon from "../../assets/userex.svg?react";
import ActivateIcon from "../../assets/usermark.svg?react";
import FilterIcon from "../../assets/tablefilter.svg?react";
type Props = {
    users: User[];
    onToggleFilter: () => void;
};
const UsersTable = ({ users, onToggleFilter }: Props) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState<string | null>(null);
    const [modal, setModal] = useState<{ show: boolean; type: string; userId: string } | null>(null);

    return (
        <div className="users__table-wrapper">
            <div className="users__mobile-filter">
                <button className="mobile-filter-btn" onClick={onToggleFilter}>
                    Filter
                    <FilterIcon />
                </button>
            </div>
            <div className="users__table-scroll">
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
                                    <div className="th-content">
                                        <span>{label}</span>
                                        <button
                                            className="filter-btn"
                                            onClick={e => {
                                                e.stopPropagation();
                                                onToggleFilter();
                                            }}
                                        >
                                            <FilterIcon />
                                        </button>
                                    </div>
                                </th>

                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td data-label="Organization" onClick={() => { saveUser(user); navigate(`/users/${user.id}`); }}>{user.organization}</td>
                                <td data-label="Username" onClick={() => { saveUser(user); navigate(`/users/${user.id}`); }}>{user.fullName}</td>
                                <td data-label="Email" onClick={() => { saveUser(user); navigate(`/users/${user.id}`); }}>{user.email}</td>
                                <td data-label="Phone" onClick={() => { saveUser(user); navigate(`/users/${user.id}`); }}>{user.phone}</td>
                                <td data-label="Date Joined" onClick={() => { saveUser(user); navigate(`/users/${user.id}`); }}>
                                    {(() => {
                                        const d = new Date(user.dateJoined);
                                        if (isNaN(d.getTime())) return "—";
                                        const date = d.toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                            year: "numeric"
                                        });
                                        const time = d.toLocaleTimeString("en-US", {
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true
                                        });
                                        return `${date} ${time.toLowerCase()}`;
                                    })()}
                                </td>
                                <td data-label="Status" onClick={() => { saveUser(user); navigate(`/users/${user.id}`); }}>
                                    <span className={`status status--${user.status.toLowerCase()}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td>
                                    <div style={{ position: 'relative' }}>
                                        <button className="menu-btn" onClick={(e) => { e.stopPropagation(); setMenuOpen(menuOpen === user.id ? null : user.id); }}>⋮</button>
                                        {menuOpen === user.id && (
                                            <div className="action-menu">
                                                <button onClick={() => { saveUser(user); navigate(`/users/${user.id}`); setMenuOpen(null); }}> <EyeIcon />View Details</button>
                                                <button onClick={() => { setModal({ show: true, type: 'blacklist', userId: user.id }); setMenuOpen(null); }}> <BlacklistIcon />Blacklist User</button>
                                                <button onClick={() => { setModal({ show: true, type: 'activate', userId: user.id }); setMenuOpen(null); }}> <ActivateIcon />Activate User</button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modal?.show && (
                <div className="modal-overlay" onClick={() => setModal(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h3>Are you sure?</h3>
                        <p>Do you want to {modal.type} this user?</p>
                        <div className="modal-actions">
                            <button onClick={() => setModal(null)}>Cancel</button>
                            <button onClick={() => {/* handle action */ setModal(null); }}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default UsersTable;