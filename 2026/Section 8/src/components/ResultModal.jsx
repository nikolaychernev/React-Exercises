import {useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

export default function ResultModal({ref, targetTime, remainingTime, resetRemainingTime}) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    const hasLost = remainingTime < 0;
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    const remainingTimeFormatted = (remainingTime / 1000).toFixed(2);

    return (
        createPortal(
            <dialog onClose={resetRemainingTime} ref={dialog} className="result-modal">
                {hasLost && <h2>You lost</h2>}
                {!hasLost && <h2>Your score: {score}</h2>}
                <p>The target time was <strong>{targetTime}</strong> seconds.</p>
                {!hasLost && <p>You stopped the timer with <strong>{remainingTimeFormatted} seconds left.</strong></p>}
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>,
            document.getElementById("modal")
        )
    );
}