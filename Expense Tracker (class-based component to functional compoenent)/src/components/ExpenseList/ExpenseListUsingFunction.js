import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/TransactionUsingFunction";

export default function ExpenseList({ allTransactions }) {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {allTransactions.map((expense, index) =>
          (<Transaction key={expense.id} index={index} expense={expense} />
        ))}
      </ul>
    </div>
  );
}
