import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Header from './components/Header/index';
import GlobalStyled from './style/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
