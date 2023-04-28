import React from "react";
import "./Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="container-fluid header">
      <nav className="container d-flex justify-content-between align-items-center">
        <a href="" className="logo text-capitalize">
          satoshi
        </a>
        <Button text="buy now" color="#0A7279" />
      </nav>
    </header>
  );
};

export default Header;
