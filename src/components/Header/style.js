import styled from 'styled-components';
import search from '../../assets/img/search.svg';
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
    .search {
      display: flex;
      justify-content: center;
      input {
        width: 220px;
        background: #f5f8fa;
        border: 1px solid #e6ecf0;
        height: 34px;
        padding: 0 30px 0 12px;
        border-radius: 16px;
        color: #667581;
        font-size: 12px;
        background: #f5f8fa url(${search}) no-repeat 190px center;
      }
    }
  }
`;
