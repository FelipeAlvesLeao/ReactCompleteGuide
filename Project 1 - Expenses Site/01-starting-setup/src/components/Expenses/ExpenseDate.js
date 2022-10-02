import './ExpenseDate.css'

function ExpenseDate(props) {
    let monthtmp, firstLetter, remainingLetters, month, day, year;
    monthtmp = props.date.toLocaleString('pt-BR',{ month: 'long'})
    firstLetter = monthtmp.charAt(0);
    remainingLetters = monthtmp.slice(1);
    month = firstLetter.toUpperCase() + remainingLetters;
    day = props.date.toLocaleString('pt-BR', {day: '2-digit'})
    year = props.date.getFullYear();
    return (       
    <>
    <div className="expense-date"> 
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__year'>{year}</div>
    <div className='expense-date__day'>{day}</div>
    </div>
    </>)
    
}

export default ExpenseDate;