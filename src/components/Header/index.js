import React from 'react';
import { Container } from './style';
import avatar from '../../assets/img/user.png';
import { FaBars } from 'react-icons/fa';
// import { FaSearch, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <Container>
      <header>
        <div className="headerTitle">
          <FaBars size="24" />
          <h1>Dashboard</h1>
        </div>
        <div className="search">
          <input type="text" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="" />
          <div className="info">
            <strong>Hamilton Silva</strong>
            <span>admin</span>
          </div>
        </div>
      </header>
    </Container>
  );
}

export default Header;
