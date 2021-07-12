import React from 'react';
import { FaPeopleCarry, FaIgloo } from 'react-icons/fa';
import { Container, Menu } from './style';

function Sidebar() {
  return (
    <Container>
      <div>
        <FaPeopleCarry size={30} />
        <span>UNITUENDA</span>
      </div>
      <nav>
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Inbox</span>
          </li>
          <li>
            <span>Cliente</span>
          </li>
          <li>
            <span>Funcionários</span>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Sidebar;
