import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__search">
        <input placeholder="Search for anything" />
        <button>🔍</button>
      </div>

      <div className="navbar__right">
        <a href="#" className="navbar__docs">Docs</a>
        <span className="navbar__bell">🔔</span>
        <div className="navbar__profile">
          <img src="https://i.pravatar.cc/40" alt="avatar" />
          <span>Adedeji</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
