import React from "react";
import "./Button.scss";

const Button = ({ text, color, outline }) => {
  return (
    <a
      style={{
        background: color,
        border: outline ? "2px solid #f7931b" : "none",
      }}
      className={`button`}
    >
      {text}
    </a>
  );
};

Button.defaultprops = {
  text: "Buy Now",
  color: "#0A7279",
};

export default Button;
