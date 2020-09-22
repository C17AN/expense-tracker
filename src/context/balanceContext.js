import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  balance: 0,
  // 타입스크립트가 이래서 필요하구나..
  transactions: [
    // { title: "알바비", type: "income", cost: 300000, timestamp: 2020 },
    // { title: "도서 구입", type: "expenditure", cost: 20000, timestamp: 2020 },
  ],
};

export const BalanceContext = createContext(initialState);

export const BalanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <BalanceContext.Provider
      value={{
        balance: state.balance,
        transactions: state.transactions,
        dispatch: dispatch,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
