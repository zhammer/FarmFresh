var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
import Main from '../components/Main.jsx';
var HelloWorld = require('../components/HelloWorld.jsx');
import Tester from '../utils/Tester.jsx';
import HelloES6 from '../utils/HelloES6.jsx';

var routes = (
  <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={HelloWorld} />
            <Route path='/tester' component={Tester} />
        </Route>
  </Router>
);

module.exports = routes;