import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Header from './components/Header/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
