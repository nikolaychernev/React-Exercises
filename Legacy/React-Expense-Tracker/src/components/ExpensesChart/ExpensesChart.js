import React from "react";

import Chart from "../Chart/Chart";

function ExpensesChart(props) {
    const monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => {
        return getShortMonthName(new Date(2000, m));
    });

    const dataPoints = [];

    for (const monthName of monthNames) {
        dataPoints.push({label: monthName, value: 0});
    }

    for (const expense of props.expenses) {
        const expenseMonth = getShortMonthName(expense.date);
        const dataPoint = dataPoints.find(dataPoint => dataPoint.label === expenseMonth);

        if (dataPoint) {
            dataPoint.value += expense.amount;
        }
    }

    return (
        <Chart dataPoints={dataPoints}/>
    );
}

function getShortMonthName(date) {
    return date.toLocaleString('en-Us', {month: 'short'});
}

export default ExpensesChart;