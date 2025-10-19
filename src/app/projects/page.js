import ProjectLayout from "@/layouts/ProjectLayout";
import Image from "next/image";
import "./page.css";

export default function Projects() {

  const projects = [
    {
      title: "cordax mep routing tool",
      subtitle: "cordax mep routing tool",
      image: "/static/movies/1883.jpg",
      description: "cordax mep routing tool",
    }
  ]

  return (
    <ProjectLayout title="projects" >
      {/* <div id="projects">
        <hl></hl>
        {projects.map((project, index) => (
          <div key={ index }>
            <div className="projectCard">
              <div className="projectHeader">
                <h2>{project.title}</h2>
                <h6>{project.subtitle}</h6>
              </div>
              <Image
                aria-hidden
                src={project.image}
                alt={project.title}
                width={0}
                height={0}
              ></Image>
              <p className="projectDescription">{project.description}</p>
            </div>
            <hl />
          </div>
        ))}
      </div> */}
    </ProjectLayout>
  );
}
