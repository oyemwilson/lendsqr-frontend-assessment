import { useState } from "react";
import { Search } from "lucide-react";
import "./Navbar.scss";
import Logo from "../../assets/logo.svg?react";

const Navbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar__left">
          <button className="navbar__hamburger">☰</button>

          <div className="navbar__logo">
            <Logo />
          </div>

          <div className="navbar__search">
            <input placeholder="Search for anything" />
            <button>
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="navbar__right">
          <button
            className="navbar__search-icon"
            onClick={() => setShowMobileSearch(true)}
            aria-label="Open search"
          >
            <Search size={22} />
          </button>

          <span className="navbar__bell">🔔</span>

          <div className="navbar__profile">
            <img src="https://i.pravatar.cc/40" alt="avatar" />
            <span>Adedeji</span>
          </div>
        </div>
      </header>

      {showMobileSearch && (
        <div className="navbar__mobile-search">
          <Search size={18} />
          <input placeholder="Search..." autoFocus />
          <button onClick={() => setShowMobileSearch(false)}>✕</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
