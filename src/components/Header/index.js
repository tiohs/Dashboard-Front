import React from 'react';
import { Conteiner } from './style';

function Header() {
  return (
    <Conteiner>
      <header>
        <h2 className="header-title">
          <label for="nav-toogle">
            <span className="fas fa-bars"></span>
          </label>
          Dashboard
        </h2>
        <div className="search-wrapper">
          <span className="fas fa-search"></span>
          <input type="search" placeholder="Pesquisar" />
        </div>
        <div className="user-wrapper">
          <img src="img/user.png" height="40px" width="40px" alt="Usuário" />
          <div>
            <h4>Simon Joseph</h4>
            <small>Cliente</small>
          </div>
        </div>
      </header>
    </Conteiner>
  );
}

export default Header;
