import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseFormUsingFunction";
import ExpenseList from "./components/ExpenseList/ExpenseListUsingFunction";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfoUsingFunction";

export default function App() {
  // Create state for the expenses here
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Salary", amount: 10000 },
    { id: 2, text: "Groceries", amount: -3000 },
    { id: 3, text: "Entertainment", amount: -1000 },
  ]);
  const addTransaction = (newTransaction) => {
    console.log("new Transaction: ", newTransaction);
    setTransactions([...transactions, newTransaction]);
  };
  const totalIncome = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  const totalExpense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + Math.abs(item.amount), 0);
  const totalBalance = totalIncome - totalExpense;
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm onAddTransaction={addTransaction} />
        <div className="expenseContainer">
          {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo
            totalIncome={totalIncome}
            totalBalance={totalBalance}
            totalExpense={totalExpense}
          />
          <ExpenseList allTransactions={transactions} />
        </div>
      </div>
    </>
  );
}
