import React from "react";

//  <ProjectItem name={project.name} about={project.about} technologies={project.technologies}/>


function ProjectItem({ name, about, technologies }) {
  const listoftech= technologies.map((technology,index)=>{
    return <span key={index}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {listoftech}
      </div>
    </div>
  );
}

export default ProjectItem;
