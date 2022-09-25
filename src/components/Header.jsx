import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Solmquiz
        </Link>
      </div>
    </header>
  );
};

export default Header;
