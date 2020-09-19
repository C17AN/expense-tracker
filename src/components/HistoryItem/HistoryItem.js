import React from "react";
import classNames from "classnames";
import "./HistoryItem.scss";

function HistoryItem({ item, price, type }) {
  return (
    <div className={`historyItem ${classNames({ [type]: type })}`}>
      <div className="historyItem__item">{item}</div>
      <div className="historyItem__price">{price} 원</div>
    </div>
  );
}

export default HistoryItem;
