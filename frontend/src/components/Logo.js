import React from "react";

const Logo = (props) => {
  return (
    <div className="text-center">
      <img
        className="mt-5 mb-2"
        src="message-logo.png"
        alt=""
        width="72"
        height="72"
      />
      <h1 className="h2 mb-5 font-weight-normal">Messagerie</h1>
    </div>
  );
};

export default Logo;
