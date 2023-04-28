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
        <Button
          text="buy now"
          color="#0A7279"
          Link="https://www.dextools.io/app/en/ether/pair-explorer/0x4d813f64b2eb485540db2b65663f4af74c0e63d1"
        />
      </nav>
    </header>
  );
};

export default Header;
