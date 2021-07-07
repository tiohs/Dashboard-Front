import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Header from './components/Header/index';
import './style/style.css';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
