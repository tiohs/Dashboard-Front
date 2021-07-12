import React from 'react';
import { FaPeopleCarry } from 'react-icons/fa';
import { Container, Menu } from './style';

function Sidebar() {
  return (
    <Container>
      <div className="sidebar">
        <div className="sidebar-brand">
          <FaPeopleCarry size={30} />
          <span>UNITUENDA</span>
        </div>
        <Menu>
          <ul>
            <li className="active">
              <span>Dashboard</span>
            </li>
            <li>
              <span>Inbox</span>
            </li>
            <li>
              <span>Cliente</span>
            </li>
          </ul>
        </Menu>
      </div>
    </Container>
  );
}

export default Sidebar;
