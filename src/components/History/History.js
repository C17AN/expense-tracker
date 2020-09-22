import React, { useContext } from "react";
import { BalanceContext } from "../../context/balanceContext";
import HistoryItem from "../HistoryItem/HistoryItem";
import "./History.scss";

function History() {
  const { transactions } = useContext(BalanceContext);
  return (
    <div className="history">
      <h3>지출 내역</h3>
      {transactions.length !== 0 ? (
        <>
          {transactions.map((transaction) => (
            <HistoryItem
              title={transaction.title}
              cost={transaction.cost}
              type={transaction.type}
            ></HistoryItem>
          ))}
          <div className="history__caution">
            * 최근 한 달간의 내역만이 저장됩니다.
          </div>
        </>
      ) : (
        <div>아직은 내용이 없어요 ㅜㅜ</div>
      )}
    </div>
  );
}

export default History;
