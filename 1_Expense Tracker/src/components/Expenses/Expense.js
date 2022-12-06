import React , { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import './Expense.css';

const Expense = (props) => {

    const [filterYear , setFilterYear] = useState('2021');

    const filterChange = (selectYear) => {
        setFilterYear(selectYear);
    };

    const filterExpenses = props.expenseItems.filter( (expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    } );

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={ filterYear } onFilter={ filterChange } />
                <ExpenseChart expenses={ filterExpenses }/>
                <ExpensesList itemsExpense={ filterExpenses }/>
            </Card>
        </div>
    )
}

export default Expense;