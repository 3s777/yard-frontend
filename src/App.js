import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Banner from "./Banner.js";
import DevelopmentSection from "./DevelopmentSection.js";
import Complexes from "./Complexes.js";
import Complex from "./Complex.js";
import Footer from "./Footer.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Banner} />
          <Route exact path="/" component={DevelopmentSection} />
          <Route exact path="/" component={Complexes} />
          <Route path="/complex" component={Complex} />
          <Route path="/complex/banner" component={Banner} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
