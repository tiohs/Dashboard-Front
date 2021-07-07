import styled from 'styled-components';

export const Conteiner = styled.header`
  header {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 345px;
    width: calc(100% - 345px);
    top: 0;
    z-index: 100;
    transition: left 300ms;
    h2 {
      color: #222;
    }
    label {
      span {
        font-size: 1.7rem;
        padding-right: 1rem;
      }
    }
  }
`;
