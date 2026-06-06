import Tasks from "./Tasks.jsx";
import Button from "./Button.jsx";

export default function Project({project, addTask, removeTask, removeProject}) {
    function handleClick() {
        removeProject(project);
    }

    return (
        <div className="w-[35rem] mt-16">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">
                    {project.name}
                </h1>
                <Button onClick={handleClick} label="Delete" hasBackground={false}/>
            </div>
            <p className="text-stone-400 mb-4">
                {project.date}
            </p>
            <p className="text-stone-600 mb-4">
                {project.description}
            </p>
            <hr className="my-5"/>
            <Tasks tasks={project.tasks} addTask={addTask} removeTask={removeTask}/>
        </div>
    );
}