import React from "react";

import "./Button.css";

const Button = (props) => {
    const buttonClickHandler = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button onClick={buttonClickHandler} type={props.type}>
            {props.children}
        </button>
    );
}

export default Button;