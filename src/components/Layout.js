import React from "react";
import BottomNavbar from "./BottomNavbar";

function Layout({ children }) {
  return (
    <div>
      <div className="App">{children}</div>
      <BottomNavbar />
    </div>
  );
}

export default Layout;
