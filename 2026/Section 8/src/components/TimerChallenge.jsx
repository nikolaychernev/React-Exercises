import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

    const interval = useRef();
    const dialog = useRef();

    function handleStart() {
        interval.current = setInterval(() => {
            setRemainingTime(prevState => prevState - 10);
        }, 10);
    }

    function handleStop() {
        clearInterval(interval.current);
        dialog.current.open();
    }

    if (remainingTime < 0) {
        clearInterval(interval.current);
        dialog.current.open();
    }

    let timeStarted = remainingTime < targetTime * 1000;

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={remainingTime}
                resetRemainingTime={() => setRemainingTime(targetTime * 1000)}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timeStarted ? handleStop : handleStart}>
                        {timeStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timeStarted ? "active" : undefined}>
                    {timeStarted ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}