import React from 'react';

import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <li onClick={() => props.onExpenseItemClick(props.expense.id)}>
            <Card className={"expense-item"}>
                <ExpenseDate date={props.expense.date}/>
                <div className={"expense-item__description"}>
                    <h2>{props.expense.title}</h2>
                    <div className={"expense-item__price"}>${props.expense.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;