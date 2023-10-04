import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (prosp) => {
    const [enterdTitle, setEnterdTitle] = useState('');
    const [enterdAmount, setEnterdAmount] = useState('');
    const [enterdDate, setEnterdDate] = useState('');
    
    /* const [userInput,setUserInput] = useState({
        enterdTitle: '',
        enterdAmount: '',
        enterdDate: ''
    }); */
    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
        /* setUserInput({
            ...userInput, enterdTitle: event.target.value,
        }); */

        /* setUserInput((prevState) => {
            return{...prevState, enterdTitle:event.target.value};
        }); */
    };

    const amountChangeHandler = (event) => {
        setEnterdAmount(event.target.value)
       /*  setUserInput({
            ...userInput, enterdAmount: event.target.value,
        }); */
    };
    
    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value)
       /*  setUserInput({
            ...userInput, enterdDate: event.target.value,
        }); */
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };

        prosp.onSaveExpenseData(expenseData);
        //clear all input when submit btn is clicked
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');

    };

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'><label>Title</label>
            <input type='text' value={enterdTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'><label>Amount</label>
            <input type='number' min="0.01" step="0.01" value={enterdAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'><label>Date</label>
            <input type='date' min="2019-01-31" max="2023-12-31" value={enterdDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;