import Button from "./Button.jsx";
import {useRef} from "react";

export default function CreateProject({projects, addProject, setIsCreatingProject}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const labelClasses = "text-sm font-bold uppercase text-stone-500";
    const inputClasses = "mb-4 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    function handleCancel() {
        setIsCreatingProject(false);
    }

    function handleSave() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (!title) {
            alert("Title is empty");
            return;
        }

        if (!description) {
            alert("Description is empty");
            return;
        }

        if (!dueDate) {
            alert("Due date is empty");
            return;
        }

        if (projects.find(project => project.name === title)) {
            alert("Project with same title already exists");
            return;
        }

        const dateOptions = {month: "short", day: "numeric", year: "numeric"};

        addProject({
            "name": title,
            "date": new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(dueDate)),
            "description": description,
            "tasks": [],
            "isSelected": true
        });

        setIsCreatingProject(false);
    }

    return (
        <div className="flex-col">
            <div className="text-right">
                <Button onClick={handleCancel} classes="mr-4" label="Cancel" hasBackground={false}/>
                <Button onClick={handleSave} label="Save"/>
            </div>
            <form className="mt-4 text-left">
                <label className={labelClasses}>Title</label>
                <input ref={titleRef} className={inputClasses}/>
                <label className={labelClasses}>Description</label>
                <textarea ref={descriptionRef} className={inputClasses}/>
                <label className={labelClasses}>Due date</label>
                <input ref={dueDateRef} type="date" className={inputClasses}/>
            </form>
        </div>
    );
}