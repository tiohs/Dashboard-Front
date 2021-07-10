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
          <FaBars size="24" color="#2570ff" />
          <h1>Dashboard</h1>
        </div>
        <div className="search">
          <input type="text" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="" />
          <strong>Hamilton Silva</strong>
          <span>admin</span>
        </div>
      </header>
    </Container>
  );
}

export default Header;
