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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          ullam minima veritatis ad autem unde sint quos culpa quaerat! Ea
          ducimus necessitatibus sit magni quo?
        </p>
        <div className="btn-div d-flex justidy-content-between align-items-center gap-3 flex-wrap">
          <Button text="join telegram" color="#F7931B" />
          <Button text="view chart" outline={true} />
        </div>
        <img src={Logo} alt="logo" className="logo" />
      </div>
    </section>
  );
};

export default Hero;
