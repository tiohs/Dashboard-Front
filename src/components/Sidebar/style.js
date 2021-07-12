import styled from 'styled-components';

export const Container = styled.div`
  width: 345px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: #2570ff;
  z-index: 100;
  transition: width 300ms;
  div {
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
  nav {
    margin-top: 1rem;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      li {
        width: 80%;
        margin-bottom: 1.3rem;
        padding-left: 2rem;
        display: flex;
        align-items: center;
        font-size: 18px;
        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
`;

export const Item = styled.li`
  ${props =>
    props.active &&
    `background: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    
    border-radius: 30px 0px 0px 30px;
    a {
          color: #2570ff !important;
          text-decoration: none;
    }
  `}
`;
