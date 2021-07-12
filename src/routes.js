import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inbox from './pages/Inbox';
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/inbox" component={Inbox} />
    </Switch>
  );
}
