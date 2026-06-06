import Task from "./Task.jsx";
import Button from "./Button.jsx";
import {useRef} from "react";

export default function Tasks({tasks, addTask, removeTask}) {
    const inputRef = useRef();

    function handleClick() {
        addTask(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
                Tasks
            </h2>
            <input ref={inputRef} className="w-64 px-2 py-1 mr-4 rounded-sm bg-stone-200"/>
            <Button onClick={handleClick} label="Add Task" hasBackground={false}/>
            {tasks.length > 0 &&
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task, i) =>
                        <Task removeTask={removeTask} key={i} taskIndex={i} task={task}/>
                    )}
                </ul>
            }
        </>
    );
}