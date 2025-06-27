import React, {useState} from "react";

import './App.css';
import UserForm from "./UserForm/UserForm";
import UsersList from "./UsersList/UsersList";

const App = () => {
    const [users, setUsers] = useState([]);

    const onFormSubmit = (user) => {
        setUsers(prevState => [user, ...prevState]);
    }

    const onUserClick = (index) => {
        setUsers(prevState => {
            const prevStateCopy = [...prevState];
            prevStateCopy.splice(index, 1);

            return prevStateCopy;
        });
    }

    const renderUsersList = () => {
        if (users.length === 0) {
            return null;
        }

        return <UsersList users={users} onUserClick={onUserClick}/>;
    }

    return (
        <React.Fragment>
            <UserForm onFormSubmit={onFormSubmit}/>
            {renderUsersList()}
        </React.Fragment>
    );
}

export default App;
