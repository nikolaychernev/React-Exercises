import React, {useState} from 'react';

import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFlter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import './Expenses.css';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState(2021);

    const expenses = props.expenses
        .filter(i => i.date.getFullYear() === selectedYear)
        .sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            }

            if (a.date > b.date) {
                return -1;
            }

            return 0;
        });

    function expensesFilterChangeHandler(data) {
        setSelectedYear(Number(data));
    }

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selectedYear={selectedYear} onExpensesFilterChange={expensesFilterChangeHandler}/>
            <ExpensesChart expenses={expenses}/>
            <ExpensesList expenses={expenses} onExpenseItemClick={props.onExpenseItemClick}/>
        </Card>
    );
}

export default Expenses;