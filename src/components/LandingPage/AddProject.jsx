import React from 'react';
import { useState } from 'react';
import '../../App.css';
import ProjectCard from './ProjectCard.jsx';


function AddProject({ projects, setProjects }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [search, setSearch] = useState("");

    const filteredProjects = projects.filter((project) => {
        const query = search.trim().toLowerCase();
        return (
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query)
        );
    });

    function handleSubmit(e) {
        e.preventDefault()

        console.log("Project added successfully");
        setProjects([...projects, { title, description }]);
    }


    return (

        <section className="add-project-section">
            <div className="add-project">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="projectTitle">Title</label>
                    <input type="text" id="projectTitle" name="projectTitle" onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="projectDescription">Description:</label>
                    <input type="text" id="projectDescription" name="projectDescription" onChange={(e) => setDescription(e.target.value)} />


                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="my-projects">
                <input
                    type="search"
                    id="projectSearch"
                    name="projectSearch"
                    placeholder="Search projects..."
                    aria-label="Search projects by title or description"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id ?? index}
                        title={project.title}
                        description={project.description}
                    />
                ))}
                
                {search.trim() && filteredProjects.length === 0 && (
                    <p>No projects match “{search}”.</p>
                )}
            </div>


        </section>



    );
};

export default AddProject;