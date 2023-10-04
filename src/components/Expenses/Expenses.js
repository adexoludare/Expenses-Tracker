import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';
import ExpenesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props)=> { /* arrow function is used here to declear our fucction as alternative to function keyword */
    
      const [filterYear, setFilterYear] = useState('2023');

      const filterChangeHandler = selectedYear => {
               setFilterYear(selectedYear);
      };
           //filter output expenses with ExpensesFilter
      const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
      });

     
   
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenesesList items={filteredExpenses}/>
        </Card>
    )

}

export default Expenses;