import React from 'react';
import { Container } from './style';
// import { FaSearch, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <Container>
      <header>
        <div className="headerTitle"></div>
        <div className="search">
          <input type="text" />
        </div>
        <div className="avatar">
          <img src="" alt="" />
          <strong>Hamilton Silva</strong>
          <span>admin</span>
        </div>
      </header>
    </Container>
  );
}

export default Header;
