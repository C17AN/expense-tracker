import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { BalanceContext } from "../../context/balanceContext";
import "./Transaction.scss";

function Transaction() {
  const { transactions, dispatch } = useContext(BalanceContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction();
    history.push("/");
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setType(e.target.value);
  };

  const addTransaction = () => {
    dispatch({
      type: "ADD_TRANSACTION",
      transaction: {
        title: info.title,
        cost: info.cost,
        type: type,
      },
    });
  };

  const [info, setInfo] = useState({ title: null, cost: null });
  const [type, setType] = useState(null);
  return (
    <div className="transaction">
      <h3>거래 내역 추가</h3>
      <hr className="transaction__line"></hr>
      <form className="transaction__form" onSubmit={handleSubmit}>
        <div className="transaction__title">
          <div>내용</div>
          <input
            type="text"
            placeholder="내용을 입력하세요"
            name="title"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="transaction__cost">
          <div>금액</div>
          <input
            type="text"
            placeholder="금액을 입력하세요"
            name="cost"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="transaction__checkbox">
          <input
            type="radio"
            name="type"
            value="income"
            onChange={handleSelect}
          ></input>
          <label for="income">수입</label>
          <input
            type="radio"
            name="type"
            value="expenditure"
            onChange={handleSelect}
          ></input>
          <label for="expenditure">지출</label>
        </div>
        <button
          className="transaction__button"
          type="submit"
          disabled={!(info.title && info.cost && type)}
        >
          추가하기
        </button>
      </form>
    </div>
  );
}

export default Transaction;
