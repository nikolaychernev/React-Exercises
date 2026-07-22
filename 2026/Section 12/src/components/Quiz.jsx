import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import SkipAction from "./SkipAction.jsx";

export default function Quiz({question, onAnswerClicked}) {
    function getShuffledAnswers() {
        const answers = [...question.answers];

        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }

        return answers;
    }

    return (
        <div id="quiz">
            <Question>{question.text}</Question>
            <div id="answers">
                {getShuffledAnswers().map((answer, answerIndex) => (
                    <Answer
                        key={answerIndex}
                        questionId={question.id}
                        onAnswerClicked={onAnswerClicked}>
                        {answer}
                    </Answer>
                ))}
            </div>
            <SkipAction
                questionId={question.id}
                onAnswerClicked={onAnswerClicked}/>
        </div>
    );
}