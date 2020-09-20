import React from "react";
import HistoryItem from "../HistoryItem/HistoryItem";
import "./History.scss";

function History() {
  return (
    <div className="history">
      <h3>지출 내역</h3>
      <HistoryItem item={"책"} cost={12000} type={"expenditure"} />
      <HistoryItem item={"알바비"} cost={200000} type={"income"} />
      <HistoryItem item={"학원비"} cost={150000} type={"expenditure"} />
      <HistoryItem item={"쇼핑"} cost={200000} type={"expenditure"} />
      <div className="history__caution">
        * 최근 한 달간의 내역만이 저장됩니다.
      </div>
    </div>
  );
}

export default History;
