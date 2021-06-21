import React from "react";

import Card from "../Card/Card";
import User from "../User/User";

const UsersList = (props) => {
    const onUserClick = (index) => {
        props.onUserClick(index);
    }

    const mapUsers = () => {
        return props.users.map((u, index) =>
            <User username={u.username} age={u.age} key={index} index={index} onUserClick={onUserClick}/>)
    }

    return (
        <Card>
            {mapUsers()}
        </Card>
    );
}

export default UsersList;