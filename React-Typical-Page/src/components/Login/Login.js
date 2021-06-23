import React, {useState, useEffect, useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "../Input/Input";

const initialValue = {value: "", isValid: true};

const Login = () => {
    const [emailState, setEmailState] = useState(initialValue);
    const [passwordState, setPasswordState] = useState(initialValue);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFormIsValid(
                emailState.value.includes('@') && passwordState.value.trim().length > 6
            );
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [emailState.value, passwordState.value]);

    const emailChangeHandler = (event) => {
        setEmailState((prevState) => {
            return {
                ...prevState,
                value: event.target.value
            }
        });
    };

    const passwordChangeHandler = (event) => {
        setPasswordState((prevState) => {
            return {
                ...prevState,
                value: event.target.value
            }
        });
    };

    const ctx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input type={"email"} id={"email"} value={emailState.value} isValid={emailState.isValid}
                       onChange={emailChangeHandler} label={"E-Mail"}/>
                <Input type={"password"} id={"password"} value={passwordState.value} isValid={passwordState.isValid}
                       onChange={passwordChangeHandler} label={"Password"}/>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
