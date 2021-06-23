import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
    const className = `${classes.control} ${props.isValid === false ? classes.invalid : ''}`

    return (
        <div className={className}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input;