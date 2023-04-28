import React, { useState } from "react";
import "./Footer.scss";
import { Send2, Chart, Ethereum, Link21 } from "iconsax-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <footer className="footer container-fluid">
      <div className="container d-flex justify-content-center flex-column gap-3 align-items-center">
        <div className="icon-div d-flex gap-3">
          <a href="">
            <Send2 size="32" color="#fff" variant="Broken" />
          </a>
          <a
            href="
          "
          >
            <Chart size="32" color="#fff" variant="Broken" />
          </a>
          <a
            href="
          "
          >
            <Ethereum size="32" color="#ffff" variant="Broken" />
          </a>
        </div>
        <p>Copyright © {date} Satoshi All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
