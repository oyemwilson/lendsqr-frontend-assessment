import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.scss";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <>
      <div className="layout">
        <Navbar onToggleSidebar={() => setSidebarOpen(v => !v)} />
        <div className="layout__body">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="layout__content">{children}</main>
        </div>
      </div>
    </>
  );
};


export default Layout;
