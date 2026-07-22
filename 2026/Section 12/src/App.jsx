import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import {useState} from "react";
import QUESTIONS from "./questions.js";
import Summary from "./components/Summary.jsx";

export default function App() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [answers, setAnswers] = useState([]);
    const [showSummary, setShowSummary] = useState(false);

    const question = QUESTIONS.find(q => q.id === "q" + questionNumber);
    const lastQuestionId = QUESTIONS[QUESTIONS.length - 1].id;

    function handleAnswerClicked(questionId, answer) {
        setQuestionNumber(prevState => prevState + 1);

        setAnswers(prevState => {
            const updatedAnswers = [...prevState];

            updatedAnswers.push({
                question,
                answer
            });

            return updatedAnswers;
        })

        if (questionId === lastQuestionId) {
            setShowSummary(true);
        }
    }

    return (
        <>
            <Header/>
            {!showSummary && <Quiz question={question} onAnswerClicked={handleAnswerClicked}/>}
            {showSummary && <Summary answers={answers}/>}
        </>
    );
}