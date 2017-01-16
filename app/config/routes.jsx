import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import ProductViewContainer from '../containers/ProductViewContainer.jsx';
import SearchViewContainer from '../containers/SearchViewContainer.jsx';
import CategoryViewContainer from '../containers/CategoryViewContainer.jsx';

var routes = (
  <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={SearchViewContainer} />
            <Route path='/product/:name' component={ProductViewContainer} />
            <Route path='/category/:name' component={CategoryViewContainer} />
        </Route>
  </Router>
);

module.exports = routes;