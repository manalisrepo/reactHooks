import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = React.memo(({ expenses, deleteTransaction }) => {
  console.log("Expenses in Expense List: ", expenses);
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
        {expenses.map((expense, index) => (
          <Transaction
            key={index}
            expense={expense}
            index={index}
            deletedId={() => deleteTransaction(index)}
          />
        ))}
      </ul>
    </div>
  );
});

export default ExpenseList;
