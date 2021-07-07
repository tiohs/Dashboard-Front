import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

import GlobalStyle from './style/globals';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
