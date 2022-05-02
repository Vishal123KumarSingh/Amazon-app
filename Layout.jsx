import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header className="header" />
      <Home className="home" />
    </div>
  );
}

export default Layout;
