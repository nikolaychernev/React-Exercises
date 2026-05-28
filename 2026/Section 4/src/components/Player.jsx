import {useState} from "react";

export default function Player({name, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name)

    function handleClick() {
        if (isEditing) {
            onChangeName(symbol, playerName);
        }

        setIsEditing(wasEditing => !wasEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let playerNameContent;

    if (isEditing) {
        playerNameContent = <input type="text" required value={playerName} onChange={handleChange}/>
    } else {
        playerNameContent = <span className="player-name">{playerName}</span>
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}