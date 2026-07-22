import ProgressBar from "./ProgressBar.jsx";

export default function Question({children}) {
    return (
        <div id="question">
            <ProgressBar/>
            <h2>{children}</h2>
        </div>
    );
}