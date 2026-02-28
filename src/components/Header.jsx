// components/Header.jsx
import React from 'react';

const Header = ({ toggleSidebar, shopName }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">{shopName}</h1>
        <button className="burger-button" onClick={toggleSidebar}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;