import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({
  totalIncome,
  totalBalance,
  totalExpense,
}) {
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${totalBalance}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${totalIncome}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${totalExpense}
          </p>
        </div>
      </div>
    </div>
  );
}
