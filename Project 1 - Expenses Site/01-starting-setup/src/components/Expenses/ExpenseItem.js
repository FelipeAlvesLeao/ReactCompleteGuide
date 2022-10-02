import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {


  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
//how to use state: register state with useState, get back two values = the variable and the function to set it's value 
//call the updating function when the state should change -> const [var, setVar] = useState(stateInitialValue);
// state vs props : https://i.imgur.com/aZrmlt3.png