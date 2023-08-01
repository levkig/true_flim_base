import React from "react";

const Header = ({ setCurrindex }) => {
  const buttons = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];

  return (
    <div className="header-container">
      <h1 className="header-title">Relokig</h1>
      <div className="button-container">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => setCurrindex(index)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
