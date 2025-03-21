import React, { useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = React.memo((props) => {
  const [formData, setFormData] = useState({ text: "", amount: 0, id: "" });

  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = formData.text;
    const expenseAmount = formData.amount;
    const expenseId = formData.id;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    const expense = {
      text: expenseText,
      amount: parseInt(expenseAmount),
      id: expenseId,
    };
    props.fdata(expense); // Add expense here
    clearInput();
    return;
  };

  const clearInput = () => {
    expenseAmountInput.current.focus();
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
    setFormData({ text: "", amount: 0, id: "" });
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        value={formData.text}
        onChange={(e) =>
          setFormData({
            text: e.target.value,
            amount: formData.amount,
            id: new Date().getTime(),
          })
        }
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={formData.amount}
        ref={expenseAmountInput}
        onChange={(e) =>
          setFormData({
            text: formData.text,
            amount: e.target.value,
            id: new Date().getTime(),
          })
        }
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
});

export default ExpenseForm;
