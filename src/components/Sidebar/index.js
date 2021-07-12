import React from 'react';
import { FaPeopleCarry, FaIgloo } from 'react-icons/fa';
import { Container, Item } from './style';

function Sidebar() {
  return (
    <Container>
      <div>
        <FaPeopleCarry size={30} />
        <span>UNITUENDA</span>
      </div>
      <nav>
        <ul>
          <Item active={true}>
            <FaIgloo size={24} />
            <span>Dashboard</span>
          </Item>
          <Item>
            <span>Inbox</span>
          </Item>
          <Item>
            <span>Cente</span>
          </Item>
          <Item>
            <span>Funcionários</span>
          </Item>
        </ul>
      </nav>
    </Container>
  );
}

export default Sidebar;
