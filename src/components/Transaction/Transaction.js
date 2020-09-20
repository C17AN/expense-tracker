import React from "react";
import "./Transaction.scss";

function Transaction() {
  return (
    <div className="transaction">
      <h3>거래 내역 추가</h3>
      <hr className="transaction__line"></hr>
      <div className="transaction__title">
        <div>내용</div>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          name="content"
        ></input>
      </div>
      <div className="transaction__cost">
        <div>금액</div>
        <input type="text" placeholder="금액을 입력하세요" name="cost"></input>
      </div>
      <div className="transaction__checkbox">
        <input type="radio" name="type" value="income"></input>
        <label for="income">수입</label>
        <input type="radio" name="type" value="expenditure"></input>
        <label for="expenditure">지출</label>
      </div>
      <button className="transaction__button">추가하기</button>
    </div>
  );
}

export default Transaction;
