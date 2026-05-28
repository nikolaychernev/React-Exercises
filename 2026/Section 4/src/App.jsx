import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialPlayers = {
    "X": "Player 1",
    "O": "Player 2"
};

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function getActivePlayer(gameTurns) {
    let activePlayer = "X";

    if (gameTurns.length !== 0 && gameTurns[0].currentPlayer === "X") {
        activePlayer = "O";
    }

    return activePlayer;
}

function getGameBoard(gameTurns) {
    const gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const turn of gameTurns) {
        gameBoard[turn.rowIndex][turn.colIndex] = turn.currentPlayer;
    }

    return gameBoard;
}

function getWinner(gameBoard, players) {
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol
            && firstSquareSymbol === secondSquareSymbol
            && firstSquareSymbol === thirdSquareSymbol) {

            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}

function App() {
    const [players, setPlayers] = useState(initialPlayers)
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = getActivePlayer(gameTurns);
    const gameBoard = getGameBoard(gameTurns);
    const winner = getWinner(gameBoard, players);

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevGameTurns => {
            let currentPlayer = getActivePlayer(prevGameTurns);
            return [{rowIndex, colIndex, currentPlayer}, ...prevGameTurns]
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            };
        })
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player
                    onChangeName={handlePlayerNameChange}
                    name={initialPlayers.X}
                    symbol="X"
                    isActive={activePlayer === "X"}
                />
                <Player
                    onChangeName={handlePlayerNameChange}
                    name={initialPlayers.O}
                    symbol="O"
                    isActive={activePlayer === "O"}
                />
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
            <GameBoard
                gameBoard={gameBoard}
                onSelectSquare={handleSelectSquare}
                activePlayer={activePlayer}
            />
        </div>
        <Log gameTurns={gameTurns}/>
    < /main>
}

export default App
