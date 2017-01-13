var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
import Main from '../components/Main.jsx';
import Tester from '../utils/Tester.jsx';
import HelloES6 from '../utils/HelloES6.jsx';
import ProductViewContainer from '../containers/ProductViewContainer.jsx';
import SearchViewContainer from '../containers/SearchViewContainer.jsx';

var routes = (
  <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={SearchViewContainer} />
            <Route path='/tester' component={Tester} />
            <Route path='/product/:name' component={ProductViewContainer} />
        </Route>
  </Router>
);

module.exports = routes;