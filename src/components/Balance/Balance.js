import React from "react";
import "./Balance.scss";

const Balance = () => (
  <div className="balance">
    <div className="balance__current">
      <div>현재 잔액</div>
      <h3>123,500원</h3>
    </div>
    <div className="balance__container">
      <div className="balance__income">
        <h3>이번 달 수입</h3>
        <div>52,400원</div>
      </div>
      <div className="balance__expenditure">
        <h3>이번 달 지출</h3>
        <div>21,400원</div>
      </div>
    </div>
  </div>
);

export default Balance;
