import React from "react";

const Header = ({ setCurrindex }) => {
  const buttons = [
    "Mexico",
    "Honduras",
    "Salvador",
    "Colombia",
    "Serbia",
    "France",
    "Germany",
    "Spain",
    "Italy",
    "Russia",
    "Japan",
    "China",
    "India",
    "South Korea",
    "Thailand",
    "Canada",
    "USA",
    "Brazil",
    "Argentina",
    "Chile",
  ];

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
