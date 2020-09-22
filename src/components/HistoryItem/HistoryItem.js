import React from "react";
import classNames from "classnames";
import CurrencyFormat from "react-currency-format";
import "./HistoryItem.scss";

function HistoryItem({ title, cost, type, timestamp }) {
  const date = new Date(timestamp).toLocaleString();
  return (
    <div className={`historyItem ${classNames({ [type]: type })}`}>
      <div className="historyItem__item">{title}</div>
      <div className="historyItem__timestamp">{date}</div>
      <CurrencyFormat
        className="historyItem__cost"
        renderText={(value) => <h3>{value}</h3>}
        decimalScale={2}
        value={cost} // 숙제
        displayType={"text"}
        thousandSeparator={true}
        suffix={"원"}
        prefix={type === "income" ? "+" : "-"}
      ></CurrencyFormat>
    </div>
  );
}

export default HistoryItem;
