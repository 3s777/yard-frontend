// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Header from './Header';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';
import Footer from './Footer';

export default () =>
  (<Router>
    <div>
      <Header />
      <Route exact path="/" component={Complexes} />
      <Route path="/complexes/:slug" component={Complex} />
      <Footer />
    </div>
  </Router>);
