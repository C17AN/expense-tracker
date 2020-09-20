export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log("ADDED");
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
      };
    default:
      return state;
  }
};
