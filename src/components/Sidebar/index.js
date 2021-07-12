import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  FaPeopleCarry,
  FaIgloo,
  FaInbox,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa';
import { Container, Item } from './style';

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const [, splitLocation] = pathname.split('/');

  return (
    <Container>
      <div>
        <FaPeopleCarry size={30} />
        <span>UNITUENDA</span>
      </div>
      <nav>
        <ul>
          <Item active={splitLocation === '' ? true : false}>
            <Link to="/">
              <FaIgloo size={24} />
              <span>Dashboard</span>
            </Link>
          </Item>

          <Item active={splitLocation === 'inbox' ? true : false}>
            <Link to="/inbox">
              <FaInbox size={24} />
              <span>Inbox</span>
            </Link>
          </Item>
          <Item>
            <Link>
              <FaUsers size={24} />
              <span>Cliente</span>
            </Link>
          </Item>
          <Item>
            <Link>
              <FaUserTie size={24} />
              <span>Funcionários</span>
            </Link>
          </Item>
        </ul>
      </nav>
    </Container>
  );
}

export default Sidebar;
