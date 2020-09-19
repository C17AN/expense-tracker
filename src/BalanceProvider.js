import React from "react";
import BalanceContext from "./BalanceContext";

function BalanceProvider(props) {
  return (
    <BalanceContext.Provider value={{ balance: 15 }}>
      {props.children}
    </BalanceContext.Provider>
  );
}

export default BalanceProvider;
