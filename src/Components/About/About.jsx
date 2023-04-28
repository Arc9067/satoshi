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
              Lorem ipsum dolor sit amet consectetur. Id arcu lobortis enim amet
              donec cras. Est vitae turpis cras venenatis pellentesque sit
              ornare viverra. Nec sit aliquam sed ridiculus euismod purus. Ut
              nunc lectus tincidunt rhoncus sed id varius enim.
            </p>
            <Button text="buy now" color="#136C71" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
