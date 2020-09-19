import React from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import History from "./components/History/History";
import Transaction from "./components/Transaction/Transaction";
import BalanceProvider from "./BalanceProvider";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Balance />
        <History />
        <Transaction />
      </div>
    </div>
  );
}

export default App;
