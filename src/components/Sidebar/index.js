import React from 'react';
import { FaPeopleCarry } from 'react-icons/fa';
import { Container, Menu } from './style';

function Sidebar() {
  return (
    <Container>
      <div>
        <div className="sidebar-brand">
          <FaPeopleCarry size={30} />
          <span>UNITUENDA</span>
        </div>
        <Menu></Menu>
      </div>
    </Container>
  );
}

export default Sidebar;
