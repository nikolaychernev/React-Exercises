import React from "react";
import ReactDOM from "react-dom";

import "./ErrorModal.css";
import Button from "../Button/Button";

const ErrorModal = (props) => {
    const buttonClickHandler = () => {
        props.onErrorModalClose();
    }

    return ReactDOM.createPortal(
        <div id={"error-modal"}>
            <div id={"title"}>
                <span>{props.title}</span>
            </div>
            <div id={"content"}>
                <span>{props.text}</span>
                <Button onClick={buttonClickHandler}>Okay</Button>
            </div>
        </div>,
        document.getElementById("modal-root"));
}

export default ErrorModal;