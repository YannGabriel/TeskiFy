import { Message } from "../components/projects/message";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkButton } from "../components/buttons/newProjectButton";
import { ProjectCard } from "../components/projects/projectCard";

interface Category {
  id: string;
  name: string;
}

interface Tasks{
  name:string,
  id: string
}

// Interface do meu project
interface Project {
  id: string;
  name: string;
  category: Category;
  handleRemove: () => void;
  tasks: Tasks[];
  startDate: string;
  lastDate: string;
  description: string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Tipando o estado com a interface Project

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className="min-h-[100vh] pb-[20%]">
      <h1 className="ml-5 mt-[2.5%] font-bold text-2xl">Meus projetos</h1>
      <LinkButton to="/newproject" text="Novo Projeto" />
      {message && <Message type="success" msg={message} />}

      <div className="projects block w-[80%] m-auto justify-start mt-[10%]">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              id={project.id}
              handleRemove={project.handleRemove} // Passando a função handleRemove de cada projeto
              category={project.category.name}
              startDate={project.startDate}
              lastDate={project.lastDate}
              description={project.description}
              tasks={project.tasks}
            />
          ))}
      </div>
    </div>
  );
};
