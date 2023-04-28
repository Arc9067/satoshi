import React from "react";
import "./About.scss";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";

const About = () => {
  return (
    <section className="container-fluid about">
      <div className="container">
        <div className="row  align-items-center justify-content-between gap-5 p-4">
          <div className="col-lg-5">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-lg-6 d-flex flex-column gap-3 align-items-start">
            <h1 className="title text-capitalize">
              about satoshi the blockchain lord
            </h1>
            <p>
              Satoshi is a new decentralized crypto project that is built on the
              Ethereum blockchain. It boasts of 0% tax and offers users a way to
              transact securely and privately. The project has gained a lot of
              attention in the crypto space due to its unique approach and
              innovative features. Many investors and traders have already
              started to show interest in the project, and it is expected to
              gain even more traction in the coming months. With its focus on
              privacy and security, Satoshi has the potential to become a major
              player in the crypto world.
            </p>
            <Button
              text="buy now"
              color="#136C71"
              Link="https://www.dextools.io/app/en/ether/pair-explorer/0x4d813f64b2eb485540db2b65663f4af74c0e63d1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
