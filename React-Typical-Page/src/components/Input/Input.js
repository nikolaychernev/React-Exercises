import React, {useImperativeHandle, useRef} from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const className = `${classes.control} ${props.isValid === false ? classes.invalid : ''}`
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: focus
        }
    })

    return (
        <div className={className}>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={inputRef} type={props.type} id={props.id} value={props.value} onChange={props.onChange}/>
        </div>
    )
});

export default Input;