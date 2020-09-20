import React, { createContext } from "react";

const initialState = {
  balance: 0,
  transaction: [
    { title: "도서 구입", type: "income", cost: 20000, timestamp: 2020 },
  ],
};
