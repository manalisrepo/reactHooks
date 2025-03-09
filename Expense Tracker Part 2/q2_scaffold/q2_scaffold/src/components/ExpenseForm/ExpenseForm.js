import { useState, useRef, useEffect } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const [formData, setFormData] = useState({ text: "", amount: 0 });
  // const [expenseList, setExpenseList] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Logic to add expense here
    props.fdata({ text: formData.text, amount: formData.amount });
    setFormData({ text: "", amount: 0 });
    expenseTextInput.current.focus();
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        value={formData.text}
        onChange={(e) =>
          setFormData({ text: e.target.value, amount: formData.amount })
        }
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        value={formData.amount}
        onChange={(e) =>
          setFormData({ text: formData.text, amount: e.target.value })
        }
        type="number"
        placeholder="Enter amount..."
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
