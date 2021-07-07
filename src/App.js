import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Header from './components/Header/index';
import GlobalStyle from './style/globals';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
