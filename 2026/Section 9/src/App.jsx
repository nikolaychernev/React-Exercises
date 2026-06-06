import ProjectList from "./components/ProjectList.jsx";
import {useState} from "react";
import Project from "./components/Project.jsx";
import NoSelectedProject from "./components/NoSelectedProject.jsx";
import CreateProject from "./components/CreateProject.jsx";

function App() {
    const [projects, setProjects] = useState([
        {
            "name": "Learning React",
            "date": "Jun 5, 2026",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan mauris ac felis accumsan, aliquam iaculis justo interdum. Pellentesque quis nibh mauris. Sed at ante ut ligula sodales semper vel sed arcu. Praesent facilisis, eros id elementum iaculis, leo diam fringilla risus, non vehicula erat quam ut augue. Praesent pretium ex in maximus aliquam. Nunc molestie porta turpis, sit amet ultrices libero feugiat non. Aliquam tristique dolor purus, aliquam commodo lacus condimentum at. Sed sed urna quis ex tempor ultrices. Vivamus sed lacus mauris. Vestibulum non semper turpis, in sodales elit.",
            "tasks": ["Learn the basics"],
            "isSelected": false
        },
        {
            "name": "Learning React 2",
            "date": "Jun 7, 2026",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan mauris ac felis accumsan, aliquam iaculis justo interdum. Pellentesque quis nibh mauris. Sed at ante ut ligula sodales semper vel sed arcu. Praesent facilisis, eros id elementum iaculis, leo diam fringilla risus, non vehicula erat quam ut augue. Praesent pretium ex in maximus aliquam. Nunc molestie porta turpis, sit amet ultrices libero feugiat non. Aliquam tristique dolor purus, aliquam commodo lacus condimentum at. Sed sed urna quis ex tempor ultrices. Vivamus sed lacus mauris. Vestibulum non semper turpis, in sodales elit.",
            "tasks": ["Learn the basics 2"],
            "isSelected": false
        }
    ]);

    const [isCreatingProject, setIsCreatingProject] = useState(false);

    const selectedProject = projects.find(project => project.isSelected);

    function addTask(project, task) {
        if (!task) {
            return;
        }

        setProjects((prev) => {
            const clonedProjects = JSON.parse(JSON.stringify(prev));
            const foundProject = clonedProjects.find(clonedProject => clonedProject.name === project);

            foundProject.tasks.push(task);
            return clonedProjects;
        })
    }

    function removeTask(project, taskIndex) {
        setProjects((prev) => {
            const clonedProjects = JSON.parse(JSON.stringify(prev));
            const foundProject = clonedProjects.find(clonedProject => clonedProject.name === project);

            foundProject.tasks.splice(taskIndex, 1);
            return clonedProjects;
        })
    }

    function selectProject(projectIndex) {
        setProjects((prev) => {
            const clonedProjects = JSON.parse(JSON.stringify(prev));
            deselectPrevSelectedProject(clonedProjects);
            setIsCreatingProject(false);

            clonedProjects[projectIndex].isSelected = true;
            return clonedProjects;
        })
    }

    function openCreateProjectPage() {
        setProjects((prev) => {
            const clonedProjects = JSON.parse(JSON.stringify(prev));
            deselectPrevSelectedProject(clonedProjects);
            setIsCreatingProject(true);

            return clonedProjects;
        })
    }

    function addProject(project) {
        setProjects((prev) => {
            const clonedProjects = JSON.parse(JSON.stringify(prev));
            clonedProjects.push(project);

            return clonedProjects;
        })
    }

    function deselectPrevSelectedProject(clonedProjects) {
        const prevSelectedProject = clonedProjects.find(clonedProject => clonedProject.isSelected);

        if (prevSelectedProject) {
            prevSelectedProject.isSelected = false;
        }
    }

    function removeProject(project) {
        setProjects((prev) => {
            const clonedProjects = JSON.parse(JSON.stringify(prev));
            return clonedProjects.filter(clonedProject => clonedProject.name !== project.name)
        })
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectList
                projects={projects}
                selectedProject={selectedProject}
                selectProject={selectProject}
                openCreateProjectPage={openCreateProjectPage}
            />
            {!selectedProject && isCreatingProject &&
                <CreateProject
                    projects={projects}
                    addProject={addProject}
                    setIsCreatingProject={setIsCreatingProject}
                />
            }
            {!selectedProject && !isCreatingProject &&
                <NoSelectedProject openCreateProjectPage={openCreateProjectPage}/>
            }
            {selectedProject &&
                <Project
                    project={selectedProject}
                    addTask={(task) => addTask(selectedProject.name, task)}
                    removeTask={(taskIndex) => removeTask(selectedProject.name, taskIndex)}
                    removeProject={removeProject}
                />
            }
        </main>
    );
}

export default App;
