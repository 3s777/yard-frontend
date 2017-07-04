import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Banner from "./Banner.js";
import DevelopmentSection from "./DevelopmentSection.js";
import Complexes from "./Complexes.js";
import Footer from "./Footer.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <DevelopmentSection />
        <Complexes />
        <Footer />
      </div>
    );
  }
}

export default App;
