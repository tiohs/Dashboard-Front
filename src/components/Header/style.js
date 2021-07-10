import styled from 'styled-components';

export const Container = styled.div`
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
    align-items: center;
    .headerTitle {
      display: flex;
      align-items: center;
      h1 {
        font-family: 'Roboto' sans-serif;
        margin-left: 10px;
      }
    }
  }
`;
