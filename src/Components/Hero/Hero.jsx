import Button from "../Button/Button";
import React from "react";
import "./Hero.scss";
import Logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <section className="hero container-fluid">
      <div className="container d-flex flex-column gap-3">
        <h1 className="title">
          SATOSHI D <span>BLOCKCHAIN</span> FOUNDATION
        </h1>
        <p className="info">
          Satoshi is a decentralized crypto project on Ethereum with 0% tax,
          prioritizing secure and private transactions. Its unique approach and
          innovative features have gained significant attention in the crypto
          world, drawing interest from investors and traders. With its focus on
          privacy and security, Satoshi has the potential to become a major
          player in the industry.
        </p>
        <div className="btn-div d-flex justidy-content-between align-items-center gap-3 flex-wrap">
          <Button
            text="join telegram"
            color="#F7931B"
            Link="https://t.me/SatoshiERC20"
          />
          <Button
            text="twitter"
            outline={true}
            Link="https://twitter.com/SatoshiERC20_"
          />
        </div>
        <img src={Logo} alt="logo" className="logo" />
      </div>
    </section>
  );
};

export default Hero;
