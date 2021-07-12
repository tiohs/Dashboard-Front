import styled from 'styled-components';

export const Container = styled.div`
  div {
    width: 345px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: #2570ff;
    z-index: 100;
    transition: width 300ms;
    .sidebar-brand {
      height: 90px;
      padding: 1rem 0rem 1rem 2rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        display: inline-block;
        padding-right: 1rem;
        margin-left: 10px;
        font-size: 24px;
      }
    }
  }
`;

export const Menu = styled.nav``;
