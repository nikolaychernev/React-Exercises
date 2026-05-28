import InputField from "./InputField.jsx";

export default function UserInput({userInput, onInputChange}) {
    return (
        <div id="user-input">
            <div className="input-group margin-bottom">
                <InputField
                    type={userInput.initialInvestment}
                    onChange={onInputChange}
                />
                <InputField
                    type={userInput.annualInvestment}
                    onChange={onInputChange}
                />
            </div>
            <div className="input-group">
                <InputField
                    type={userInput.expectedReturn}
                    onChange={onInputChange}
                />
                <InputField
                    type={userInput.duration}
                    onChange={onInputChange}
                />
            </div>
        </div>
    );
}