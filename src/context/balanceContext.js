import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  balance: 0,
  transactions: [
    { title: "도서 구입", type: "income", cost: 20000, timestamp: 2020 },
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
