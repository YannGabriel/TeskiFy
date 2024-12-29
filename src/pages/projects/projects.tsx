import { Message } from "../../components/projects/message";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkButton } from "../../components/buttons/newProjectButton";
import { ProjectCard } from "../../components/projects/projectCard";
import { Loader } from "../../components/Layout/loader";
import styles from "./project.module.scss"


interface Category {
  id: string;
  name: string;
}

interface Tasks {
  name: string;
  id: string;
}

// Interface do meu project
interface Project {
  id: string;
  name: string;
  category: Category;
  handleRemove: (id: string) => void;
  tasks: Tasks[];
  startDate: string;
  lastDate: string;
  description: string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Tipando o estado com a interface Project
  const [removeLoading, setRemoveLoading] = useState(false); // Remoção/criação do laoding

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
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  function removeProject(id: string) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.projectPageTitle}>Meus projetos</h1>
      <div className={styles.newProjectButton}>
        <LinkButton to="/newproject" text="Novo Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}

      <div className={styles.projectList}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              id={project.id}
              handleRemove={removeProject} // Passando a função handleRemove de cada projeto
              category={project.category.name}
              startDate={project.startDate}
              lastDate={project.lastDate}
              description={project.description}
              tasks={project.tasks}
            />
          ))}
        {!removeLoading && <Loader />}
      </div>
    </div>
  );
};
