import { Container } from "@material-ui/core";
import React from "react";
import Appbar from "./Appbar";
import BottomNavbar from "./BottomNavbar";

function Layout({ children }) {
  return (
    <div>
      <Appbar />
      <div className="App">
        <Container>{children}</Container>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default Layout;
