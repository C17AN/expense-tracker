import React from "react";
import "./Transaction.scss";

function Transaction() {
  return (
    <div className="transaction">
      <h3>거래 내역 추가</h3>
      <div className="transaction__title">
        <label for="content">내용 : </label>
        <input type="text" name="content"></input>
      </div>
      <div className="transaction__price">
        <label for="price">금액 : </label>
        <input type="text" placeholder="금액을 입력하세요" name="price"></input>
      </div>
      <div className="transaction__checkbox">
        <input type="radio" name="type" value="income"></input>
        <label for="income">수입</label>
        <input type="radio" name="type" value="expenditure"></input>
        <label for="expenditure">지출</label>
      </div>
      <button>추가하기</button>
    </div>
  );
}

export default Transaction;
