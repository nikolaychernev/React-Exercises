import React from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
    if (props.expenses.length === 0) {
        return (
            <h2 className={"expenses-list__fallback"}>No expenses found.</h2>
        );
    }

    return (
        <ul className={"expenses-list"}>
            {props.expenses.map(e => <ExpenseItem key={e.id} expense={e}
                                                  onExpenseItemClick={props.onExpenseItemClick}/>)}
        </ul>
    );
}

export default ExpensesList;