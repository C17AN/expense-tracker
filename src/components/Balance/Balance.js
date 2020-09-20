import React from "react";
import { Link } from "react-router-dom";
import "./Balance.scss";

// 홈 컴포넌트
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
    <div className="balance__quote">
      <p>
        이번 달은 지출이 적은걸요?
        <br />
        절약하는 당신에게 치얼쓰~!
      </p>
    </div>
    <div className="balance__links">
      <Link to={"/history"}>
        <button>지출내역 확인하기</button>
      </Link>
      <Link to={"/transaction"}>
        <button>내역 추가하기</button>
      </Link>
      <Link to={"/graph"}>
        <button>그래프로 확인하기</button>
      </Link>
    </div>
  </div>
);

export default Balance;
