import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if (props.itemsExpense.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>
                Found No Expenses.
            </h2>
        )
    };

    return (
        <ul className='expenses-list'>
            {
                props.itemsExpense.map((expense) => (
                    <ExpenseItem 
                        key = {expense.id}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}
                    />
                ))
            }
        </ul>
    )
}

export default ExpensesList