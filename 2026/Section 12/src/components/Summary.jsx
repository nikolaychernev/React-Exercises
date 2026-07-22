import quizComplete from "../assets/quiz-complete.png";

export default function Summary({answers}) {
    const answersCount = answers.length;
    const skippedCount = answers.filter(answer => isSkippedAnswer(answer)).length;
    const correctCount = answers.filter(answer => isCorrectAnswer(answer)).length;
    const incorrectCount = answers.filter(answer => isIncorrectAnswer(answer)).length;

    function getPercentage(partialValue, totalValue) {
        return Math.round((100 * partialValue) / totalValue);
    }

    function isSkippedAnswer(answer) {
        return answer.answer === null;
    }

    function isCorrectAnswer(answer) {
        return answer.answer === answer.question.answers[0];
    }

    function isIncorrectAnswer(answer) {
        return answer.answer != null && answer.answer !== answer.question.answers[0];
    }

    function getAnswerClassName(answer) {
        if (isSkippedAnswer(answer)) {
            return "skipped";
        } else if (isCorrectAnswer(answer)) {
            return "correct";
        } else if (isIncorrectAnswer(answer)) {
            return "wrong";
        }
    }

    return (
        <div id="summary">
            <img src={quizComplete} alt="Quiz Complete"/>
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{getPercentage(skippedCount, answersCount)}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{getPercentage(correctCount, answersCount)}%</span>
                    <span className="text">Answered correctly</span>
                </p>
                <p>
                    <span className="number">{getPercentage(incorrectCount, answersCount)}%</span>
                    <span className="text">Answered incorrectly</span>
                </p>
            </div>
            <ol>
                {answers.map((answer, answerIndex) => (
                    <li>
                        <h3>{answerIndex + 1}</h3>
                        <p className="question">{answer.question.text}</p>
                        <p className={`user-answer ${getAnswerClassName(answer)}`}>{answer.answer || answer.question.answers[0]}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}