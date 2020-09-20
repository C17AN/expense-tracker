import React from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import History from "./components/History/History";
import Transaction from "./components/Transaction/Transaction";
import Graph from "./components/Graph/Graph";
import BalanceProvider from "./BalanceProvider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Balance}></Route>
            <Route path="/history" component={History}></Route>
            <Route path="/transaction" component={Transaction}></Route>
            <Route path="/graph" component={Graph}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
