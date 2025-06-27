import React, {useState} from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [isFormHidden, setFormHidden] = useState(true);
    const [isValid, setIsValid] = useState({validTitle: true, validAmount: true, validDate: true});

    function changeTitleHandler(event) {
        setTitle(event.target.value);
    }

    function changeAmountHandler(event) {
        setAmount(event.target.value);
    }

    function changeDateHandler(event) {
        setDate(event.target.value);
    }

    function showForm() {
        setFormHidden(false);
    }

    function hideForm() {
        setFormHidden(true);
    }

    function formSubmitHandler(event) {
        event.preventDefault();

        const isFormValid = {
            validTitle: title.trim().length !== 0,
            validAmount: amount.trim().length !== 0,
            validDate: date.trim().length !== 0
        }

        setIsValid(isFormValid);

        if (Object.values(isFormValid).includes(false)) {
            return;
        }

        const expenseData = {
            title: title,
            amount: Number(amount),
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData);

        setTitle("");
        setAmount("");
        setDate("");

        hideForm();
    }

    if (isFormHidden) {
        return (
            <button onClick={showForm}>Add New Expense</button>
        );
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={"new-expense__controls"}>
                <div className={`new-expense__control ${isValid.validTitle ? "" : "invalid"}`}>
                    <label>Title</label>
                    <input type={"text"} value={title} onChange={changeTitleHandler}/>
                </div>
                <div className={`new-expense__control ${isValid.validAmount ? "" : "invalid"}`}>
                    <label>Amount</label>
                    <input type={"number"} min={0.01} step={0.01} value={amount} onChange={changeAmountHandler}/>
                </div>
                <div className={`new-expense__control ${isValid.validDate ? "" : "invalid"}`}>
                    <label>Date</label>
                    <input type={"date"} min={"2019-01-01"} max={"2022-12-31"} value={date}
                           onChange={changeDateHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button onClick={hideForm}>Cancel</button>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;