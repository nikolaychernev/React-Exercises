import {useEffect, useState} from "react";

export default function ProgressBar({max}) {
    const [remainingTime, setRemainingTime] = useState(max);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevState => prevState - 10);
        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <progress value={remainingTime} max={max}/>
    );
}