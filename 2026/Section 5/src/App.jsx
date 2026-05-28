import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Result from "./components/Result.jsx";

const INITIAL_USER_INPUT = {
    initialInvestment: {
        label: "Initial Investment",
        key: "initialInvestment",
        value: 15000
    },
    annualInvestment: {
        label: "Annual Investment",
        key: "annualInvestment",
        value: 900
    },
    expectedReturn: {
        label: "Expected Return",
        key: "expectedReturn",
        value: 5.5
    },
    duration: {
        label: "Duration",
        key: "duration",
        value: 10
    }
}

function App() {
    const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

    function handleInputChange(event) {
        setUserInput(prevUserInput => {
            const prevUserInputCopy = JSON.parse(JSON.stringify(prevUserInput));
            prevUserInputCopy[event.target.id].value = parseInt(event.target.value);

            return prevUserInputCopy;
        });
    }

    return (
        <>
            <UserInput userInput={userInput} onInputChange={handleInputChange}/>
            <Result userInput={userInput}/>
        </>
    )
}

export default App
