import React, { useState } from 'react';

import {
  FaPeopleCarry,
  FaIgloo,
  FaInbox,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa';
import { Container, Item } from './style';

function Sidebar() {
  const [li1, setLi1] = useState(true);
  const [li2, setLi2] = useState(false);
  const [li3, setLi3] = useState(false);
  const [li4, setLi4] = useState(false);

  function allLiFalse() {
    setLi1(false);
    setLi2(false);
    setLi3(false);
    setLi4(false);
  }
  function handleClick(e) {
    if (e === 'ds') {
      allLiFalse();
      setLi1(true);
      return;
    }
    if (e === 'in') {
      allLiFalse();
      setLi2(true);
      return;
    }
    if (e === 'cl') {
      allLiFalse();
      setLi3(true);
      return;
    }
    if (e === 'fu') {
      allLiFalse();
      setLi4(true);
      return;
    }
  }
  return (
    <Container>
      <div>
        <FaPeopleCarry size={30} />
        <span>UNITUENDA</span>
      </div>
      <nav>
        <ul>
          <Item active={li1} onClick={() => handleClick('ds')}>
            <FaIgloo size={24} />
            <span>Dashboard</span>
          </Item>
          <Item active={li2} onClick={() => handleClick('in')}>
            <FaInbox size={24} />
            <span>Inbox</span>
          </Item>
          <Item active={li3} onClick={() => handleClick('cl')}>
            <FaUsers size={24} />
            <span>Cliente</span>
          </Item>
          <Item active={li4} onClick={() => handleClick('fu')}>
            <FaUserTie size={24} />
            <span>Funcionários</span>
          </Item>
        </ul>
      </nav>
    </Container>
  );
}

export default Sidebar;
