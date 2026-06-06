import Button from "./Button.jsx";

export default function Task({task, taskIndex, removeTask}) {
    function handleClick() {
        removeTask(taskIndex);
    }

    return (
        <li className="flex justify-between my-4">
            {task}
            <Button onClick={handleClick} label="Clear" hasBackground={false}/>
        </li>
    );
}