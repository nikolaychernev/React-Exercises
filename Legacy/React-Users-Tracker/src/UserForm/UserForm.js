import React, {useState} from "react";

import "./UserForm.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Overlay from "../Overlay/Overlay";
import ErrorModal from "../ErrorModal/ErrorModal";

const UserForm = (props) => {
    const [formErrorMessage, setFormErrorMessage] = useState(null);
    const [form, setForm] = useState({username: "", age: ""});

    const inputChangeHandler = (event, id) => {
        setForm({
            ...form,
            [id]: event.target.value
        });
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const errorMessage = getErrorMessage();

        if (errorMessage) {
            setFormErrorMessage(errorMessage);
            return;
        }

        setForm({username: "", age: ""});
        props.onFormSubmit(JSON.parse(JSON.stringify(form)));
    }

    const getErrorMessage = () => {
        if (form.username.trim().length === 0 || form.age.trim().length === 0) {
            return {
                title: "Invalid Input",
                text: "Please enter a valid name and age (non-empty values)."
            };
        }

        if (form.age <= 0) {
            return {
                title: "Invalid Age",
                text: "Please enter a valid age (> 0)."
            };
        }

        return null;
    }

    const closeErrorModalHandler = () => {
        setFormErrorMessage(null);
    }

    const renderErrorModal = () => {
        if (formErrorMessage) {
            return (
                <React.Fragment>
                    <Overlay onOverlayClick={closeErrorModalHandler}/>
                    <ErrorModal onErrorModalClose={closeErrorModalHandler} title={formErrorMessage.title}
                                text={formErrorMessage.text}/>
                </React.Fragment>
            );
        }

        return null;
    }

    return (
        <Card>
            <form id={"user-form"} onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor={"username"}>Username</label>
                    <input type={"text"} id={"username"} value={form.username}
                           onChange={(e) => inputChangeHandler(e, "username")}/>
                </div>
                <div>
                    <label htmlFor={"age"}>Age (Years)</label>
                    <input type={"number"} id={"age"} value={form.age}
                           onChange={(e) => inputChangeHandler(e, "age")}/>
                </div>
                <Button type={"submit"}>Add User</Button>
                {renderErrorModal()}
            </form>
        </Card>
    );
}

export default UserForm;