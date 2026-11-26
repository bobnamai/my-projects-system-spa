import React from 'react';
import '../../App.css';


function ProjectCard ({title, description}) {


return (

    <section>
        <article className="project-card">
                <h2 htmlFor="projectTitle">{title}</h2>
                <p htmlFor="projectDescription">{description}</p>
        </article>

    </section>

);
};

export default ProjectCard;