import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();
    const [submittedPlayerName, setSubmittedPlayerName] = useState('');

    function handleClick() {
        setSubmittedPlayerName(playerName.current.value);
        playerName.current.value = "";
    }

    return (
        <section id="player">
            <h2>Welcome {submittedPlayerName === '' ? 'unknown entity' : submittedPlayerName}</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
