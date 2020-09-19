import React from "react";
import HistoryItem from "../HistoryItem/HistoryItem";
import "./History.scss";

function History() {
  return (
    <div className="history">
      <h3>지출 내역</h3>
      <HistoryItem item={"책"} price={12000} type={"expenditure"} />
      <HistoryItem item={"알바비"} price={200000} type={"income"} />
    </div>
  );
}

export default History;
