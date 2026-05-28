import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({userInput}) {
    const investmentResults = calculateInvestmentResults(
        {
            initialInvestment: userInput.initialInvestment.value,
            annualInvestment: userInput.annualInvestment.value,
            expectedReturn: userInput.expectedReturn.value,
            duration: userInput.duration.value
        }
    );

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {investmentResults.map(investmentResult =>
                <tr key={investmentResult.year}>
                    <td>{investmentResult.year}</td>
                    <td>{formatter.format(investmentResult.valueEndOfYear)}</td>
                    <td>{formatter.format(investmentResult.interest)}</td>
                    <td>{formatter.format(investmentResult.totalInterest)}</td>
                    <td>{formatter.format(investmentResult.investedCapital)}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}