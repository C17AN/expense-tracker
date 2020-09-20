import React from "react";
import classNames from "classnames";
import "./HistoryItem.scss";

function HistoryItem({ title, cost, type }) {
  return (
    <div className={`historyItem ${classNames({ [type]: type })}`}>
      <div className="historyItem__item">{title}</div>
      <div className="historyItem__timestamp">{`2020-07-31 오후 9시 31분`}</div>
      <div className="historyItem__cost">{cost} 원</div>
    </div>
  );
}

export default HistoryItem;
