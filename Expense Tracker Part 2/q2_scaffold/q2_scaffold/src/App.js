import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense
  const handleNewFormData = useCallback(
    (newFormData) => {
      if (!newFormData.text) return;
      setExpenses((prevExpeses) => [
        { text: newFormData.text, amount: newFormData.amount },
        ...prevExpeses,
      ]);
    },
    [setExpenses]
  );
  // Create function to delete an expense
  const handleDeleteTransaction = useCallback((indexToDelete) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((_, index) => index !== indexToDelete)
    );
  });

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm fdata={handleNewFormData} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            deleteTransaction={handleDeleteTransaction}
          />
        </div>
      </div>
    </>
  );
}

export default App;
