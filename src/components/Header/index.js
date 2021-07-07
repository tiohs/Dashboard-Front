import React from 'react';

import { FaSearch, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <h2 className="header-title">
        <label for="nav-toogle">
          <span className="fas fa-bars"></span>
        </label>
        Dashboard
      </h2>
      <div className="search-wrapper">
        <span>
          <FaSearch />
        </span>

        <input type="search" placeholder="Pesquisar" />
      </div>
      <div className="user-wrapper">
        <span>
          <FaUser size={16} />
        </span>
        <div>
          <h4>Simon Joseph</h4>
          <small>Cliente</small>
        </div>
      </div>
    </header>
  );
}

export default Header;
