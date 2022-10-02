import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  /*
    Alternative: 
    const[userInput, setUserInput} = useState( {
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }
     )

     function titleChangeHandler(e) {
     setUserInput(prevState) { 
        return{...prevState, enteredTitle: event.target.value}
      } <- importar if your state update depends on the previous state
     }
    */
  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }

  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }

  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); //javascript method that prevents page from reloading when you call the form
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // clear the input after it's submitted
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }

  return (
    <>
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.formSentStatus}>Cancel</button>
      </div>
    </form>
    </>
  );
}

export default ExpenseForm;
