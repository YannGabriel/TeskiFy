import styles from "./project.module.scss";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Layout/loader";
import { useState, useEffect } from "react";

interface Category {
  id: string;
  name: string;
}

interface Tasks {
  name: string;
  id: string;
}

interface Project {
  id?: string;
  name?: string;
  category?: Category;
  handleRemove?: (id: string) => void;
  tasks?: Tasks[];
  startDate?: string;
  lastDate?: string;
  description?: string;
}

export const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project>({});

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data: Project) => {
        setProject(data);
      })
      .catch((err) => console.error("Erro ao buscar projeto:", err));
  }, [id]);

  return (
    <>
    {project.name ? <h2>{project.name}</h2> : (
      <Loader></Loader>
    )}
    </>
  );
};
