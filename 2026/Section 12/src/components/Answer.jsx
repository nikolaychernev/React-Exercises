export default function Answer({children, questionId, onAnswerClicked}) {
    return (
        <div className="answer">
            <button onClick={() => onAnswerClicked(questionId, children)}>{children}</button>
        </div>
    );
}