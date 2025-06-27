import React from "react";

import "./User.css";

const User = (props) => {
    const userClickHandler = (index) => {
        props.onUserClick(index);
    }

    return (
        <div className={"user"} onClick={() => userClickHandler(props.index)}>
            <span>{props.username} ({props.age} years old)</span>
        </div>
    );
}

export default User;