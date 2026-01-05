import { useState } from "react";
import { Search } from "lucide-react";
import "./Navbar.scss";
import Logo from "../../assets/logo.svg?react";
import DropdownIcon from "../../assets/dropdown.svg?react";
import UserImageIcon from "../../assets/userimage.svg?react";
import NotificationIcon from "../../assets/notification.svg?react";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar__left">
          <button
            className="navbar__hamburger"
            onClick={onToggleSidebar}
            aria-label="Open menu"
          >
            ☰
          </button>

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
          >
            <Search size={22} />
          </button>

          <span className="navbar__doc">Docs</span>
          <span className="navbar__bell">
            <NotificationIcon />
          </span>

          <div className="navbar__profile">
            <UserImageIcon />
            <span>Adedeji</span>
            <DropdownIcon />
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
