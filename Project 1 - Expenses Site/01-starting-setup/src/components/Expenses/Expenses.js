import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2020");

  function SavePickedYearHandler(pickedYear) {
    setPickedYear(pickedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });


  return (
    <div>
      <Card class="expenses">
        <ExpensesFilter
          selected={pickedYear}
          onYearPicked={SavePickedYearHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList item={filteredExpenses}></ExpensesList>
        </Card>
    </div>
  );
}

export default Expenses;
