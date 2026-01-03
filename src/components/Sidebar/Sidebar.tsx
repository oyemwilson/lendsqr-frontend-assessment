import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__org">
        <span>Switch Organization</span>
      </div>

      <nav className="sidebar__nav">
        <a className="sidebar__link">Dashboard</a>

        <p className="sidebar__section">CUSTOMERS</p>
        <a className="sidebar__link active">Users</a>
        <a className="sidebar__link">Guarantors</a>
        <a className="sidebar__link">Loans</a>
        <a className="sidebar__link">Decision Models</a>
        <a className="sidebar__link">Savings</a>
        <a className="sidebar__link">Loan Requests</a>
        <a className="sidebar__link">Whitelist</a>
        <a className="sidebar__link">Karma</a>

        <p className="sidebar__section">BUSINESSES</p>
        <a className="sidebar__link">Organization</a>
        <a className="sidebar__link">Loan Products</a>
        <a className="sidebar__link">Savings Products</a>
        <a className="sidebar__link">Fees and Charges</a>
        <a className="sidebar__link">Transactions</a>
        <a className="sidebar__link">Services</a>
        <a className="sidebar__link">Service Account</a>
        <a className="sidebar__link">Settlements</a>
        <a className="sidebar__link">Reports</a>

        <p className="sidebar__section">SETTINGS</p>
        <a className="sidebar__link">Preferences</a>
        <a className="sidebar__link">Fees and Pricing</a>
        <a className="sidebar__link">Audit Logs</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
