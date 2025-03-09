import React, { useState, useEffect } from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = React.memo(({ expenses }) => {
  const [total, setTotal] = useState(0);
  const [profit, setProfit] = useState(0);
  const [expense, setExpense] = useState(0);
  // Add logic here to calculate the grand total, profit and expense amount here
  useEffect(() => {
    console.log("Expenses ", expenses);
    if (!expenses || !Array.isArray(expenses)) return;
    const totval = expenses.reduce((acc, cur) => +acc + +cur.amount, 0);
    const profval = expenses.reduce(
      (acc, cur) => (cur.amount > 0 ? +acc + +cur.amount : acc),
      0
    );
    const expval = expenses.reduce(
      (acc, cur) => (cur.amount < 0 ? +acc + +cur.amount : acc),
      0
    );
    setTotal(totval);
    setProfit(profval);
    setExpense(expval);
  }, [expenses]);
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${Math.abs(expense)}
          </p>
        </div>
      </div>
    </div>
  );
});

export default ExpenseInfo;
