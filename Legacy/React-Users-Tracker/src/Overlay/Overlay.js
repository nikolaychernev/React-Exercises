import React from "react";
import ReactDOM from "react-dom";

import "./Overlay.css";

const Overlay = (props) => {
    const overlayClickHandler = () => {
        props.onOverlayClick();
    }

    return ReactDOM.createPortal(
        <div id={"overlay"} onClick={overlayClickHandler}>
            {props.children}
        </div>,
        document.getElementById("overlay-root"));
}

export default Overlay;