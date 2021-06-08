import { Switch, Route } from 'react-router-dom';
import Dashboard from './../../src/pages/Dashboard/index';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
