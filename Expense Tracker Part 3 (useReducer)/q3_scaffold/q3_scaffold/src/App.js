import { useState, useReducer, useCallback } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        {
          text: action.payload.text,
          amount: parseInt(action.payload.amount),
          id: new Date().getTime(),
        },
        ...state,
      ];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  const [expenses, dispatch] = useReducer(reducerFunction, []);

  const handleNewFormData = useCallback((newFormData) => {
    console.log(newFormData);
    dispatch({ type: "ADD_EXPENSE", payload: newFormData });
  }, []);

  const handleDeleteExpense = useCallback((formData) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: formData });
  }, []);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm fdata={handleNewFormData} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            deleteExpense={handleDeleteExpense}
          />
        </div>
      </div>
    </>
  );
}

export default App;
