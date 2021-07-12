import styled from 'styled-components';

export const Container = styled.div`
  .sidebar {
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

export const Menu = styled.nav`
  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    li {
      width: 80%;
      margin-bottom: 1.3rem;
      padding-left: 2rem;
      padding-left: 1rem;
      display: block;
      color: #fff;
      font-size: 1.1rem;
      span {
        color: #fff;
      }
    }
    li.active {
      background: #fff;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-radius: 30px 0px 0px 30px;
      span {
        color: #2570ff;
      }
    }
  }
`;
