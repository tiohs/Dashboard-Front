import React from 'react';

function Header() {
  return (
    <header>
      <h2 class="header-title">
        <label for="nav-toogle">
          <span class="fas fa-bars"></span>
        </label>
        Dashboard
      </h2>
      <div class="search-wrapper">
        <span class="fas fa-search"></span>
        <input type="search" placeholder="Pesquisar" />
      </div>
      <div class="user-wrapper">
        <img src="img/user.png" height="40px" width="40px" alt="Usuário" />
        <div>
          <h4>Simon Joseph</h4>
          <small>Cliente</small>
        </div>
      </div>
    </header>
  );
}

export default Header;
