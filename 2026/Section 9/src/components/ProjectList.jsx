import Button from "./Button.jsx";

export default function ProjectList({projects, selectedProject, selectProject, openCreateProjectPage}) {
    const selectedProjectName = selectedProject ? selectedProject.name : undefined;

    function getButtonClasses(project) {
        let buttonClasses = "w-full text-left px-2 py-1 rounded-sm my-1 ";

        if (selectedProjectName === project.name) {
            buttonClasses += "text-stone-200 bg-stone-800";
        } else {
            buttonClasses += "text-stone-400 hover:text-stone-200 hover:bg-stone-800";
        }

        return buttonClasses;
    }

    function handleSelectProject(projectIndex) {
        selectProject(projectIndex);
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <Button onClick={openCreateProjectPage} label="+ Add Project"></Button>
            <ul className="mt-8">
                {projects.map((project, i) =>
                    <button key={i} onClick={() => handleSelectProject(i)} className={getButtonClasses(project)}>
                        {project.name}
                    </button>
                )}
            </ul>
        </aside>
    );
}