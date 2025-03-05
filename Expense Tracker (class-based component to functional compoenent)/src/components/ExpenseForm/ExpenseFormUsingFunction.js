import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({ onAddTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAddTransaction = (e) => {
    debugger;
    e.preventDefault();
    if (!text || amount === 0 || isNaN(amount)) {
      alert("Please enter valid details");
      return;
    }
    const transactionObject = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount,
    };
    console.log("transactionObject ", transactionObject);
    onAddTransaction(transactionObject); //passing data to App.js
    setText("");
    setAmount(0);
  };

  return (
    <form className={styles.form} onSubmit={handleAddTransaction}>
      <h3>Add new transaction</h3>

      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        required
      />
      <button type="submit" className={styles.submitBtn}>
        Add Transaction
      </button>
    </form>
  );
}
