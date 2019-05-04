import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import Navi from "./components/Header/Navi";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="body">
      <div className="bodyContent">
        <Navi />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
