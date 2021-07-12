import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Router from './routes';
import GlobalStyled from './style/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Sidebar />
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
