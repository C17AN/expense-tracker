import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BalanceContext } from "../../context/balanceContext";
import { Grow } from "@material-ui/core";
import CurrencyFormat from "react-currency-format";
import "./Balance.scss";

// 홈 컴포넌트
const Balance = () => {
  const { transactions } = useContext(BalanceContext);
  const [income, setIncome] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
  useEffect(() => {
    setIncome(
      transactions
        .filter((transaction) => transaction.type === "income")
        .reduce((incomeValue, current) => +incomeValue + +current.cost, 0)
    );
    setExpenditure(
      transactions
        .filter((transaction) => transaction.type === "expenditure")
        .reduce(
          (expenditureValue, current) => +expenditureValue + +current.cost,
          0
        )
    );
  }, [transactions]);
  console.log(transactions);
  return (
    <Grow in={true}>
      <div className="balance">
        <div className="balance__current">
          <div>현재 잔액</div>
          <CurrencyFormat
            renderText={(value) => <h3>{value}</h3>}
            decimalScale={2}
            value={income - expenditure} // 숙제
            displayType={"text"}
            thousandSeparator={true}
            suffix={"원"}
          ></CurrencyFormat>
        </div>
        <div className="balance__container">
          <div className="balance__income">
            <h3>이번 달 수입</h3>
            <CurrencyFormat
              renderText={(value) => <div>{value}</div>}
              decimalScale={2}
              value={+income} // 문자열형 숫자로 파싱하기 위해 + 붙임
              displayType={"text"}
              thousandSeparator={true}
              suffix={"원"}
            ></CurrencyFormat>
          </div>
          <div className="balance__expenditure">
            <h3>이번 달 지출</h3>
            <CurrencyFormat
              renderText={(value) => <div>{value}</div>}
              decimalScale={2}
              value={+expenditure}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"원"}
            ></CurrencyFormat>
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
    </Grow>
  );
};

export default Balance;
