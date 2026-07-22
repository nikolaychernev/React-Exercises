export default function SkipAction({questionId, onAnswerClicked}) {
    return (
        <div id="skip-action">
            <button onClick={() => onAnswerClicked(questionId, null)}>Skip</button>
        </div>
    );
}