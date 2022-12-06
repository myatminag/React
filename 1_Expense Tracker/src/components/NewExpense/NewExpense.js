import React , { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [formEdit , setformEdit] = useState();

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toFixed(2).toString()
        };
        props.onAddExpense(expenseData);
        setformEdit(false);
    };

    const startEditing = () => {
        setformEdit(true);
    }

    const stopEditing = () => {
        setformEdit(false);
    }

    return (
        <div className='new-expense'>
            {
                !formEdit 
                ? 
                <button onClick={ startEditing }>Add New Expense</button> 
                : 
                <ExpenseForm 
                    onSaveExpenseData={ saveExpenseDataHandler } 
                    onCancel={ stopEditing } 
                />
            }
            {/* {!formEdit && <button onClick={ startEditing }>Add New Expense</button>} */}
            {/* {formEdit && <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />} */}
        </div>
    );
};

export default NewExpense;