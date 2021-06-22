import React, {useState, useEffect} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const initialValue = {value: "", isValid: true};

const Login = (props) => {
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

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                    />
                </div>
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
