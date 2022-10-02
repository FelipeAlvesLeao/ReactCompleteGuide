import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {

  function SaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = { 
        ...enteredExpenseData, 
        id: Math.random().toString()};
        props.onAddExpense(expenseData)
        formSentStatus();
  }

  const [formSent, setFormSent] = useState(false) 

  function formSentStatus() {
    setFormSent(!formSent);
  }
  let rendering
  if(formSent === false) {rendering =<button onClick={formSentStatus}>Add New Expense</button>}
  else {rendering = <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} formSentStatus={formSentStatus} ></ExpenseForm>}

  return (
    <div className="new-expense">
      {rendering}
    </div>
  );
}

export default NewExpense;
