import styles from "./project.module.scss";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Layout/loader";
import { useState, useEffect } from "react";
import { ProjectForm } from "../../components/Form/form";
import { Message } from "../../components/projects/message";

interface Category {
  id?: string;
  name?: string;
}

interface Tasks {
  name?: string;
  id?: string;
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
  const [showProjectForm, setProjectForm] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  function toggleProjectForm() {
    setProjectForm(!showProjectForm);
  }

  function editPost(project: any) {
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH", //atualiza o projeto (so o que foi mudado)
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(project), //projeto vira tetxo
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setProjectForm(false);
        setType("Sucess");
        setMessage("Atualização feita com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(() =>
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
        .catch((err) => console.error("Erro ao buscar projeto:", err))
    );
  }, [id]);

  return (
    <div className={styles.editProjectContainer}>
      <div className={styles.messageContainer}>
        {message && <Message type={type} msg={message} />}
      </div>
      {project.name ? (
        <div className={styles.projectsInfos}>
          <h1 className={styles.projectName}>Projeto: {project.name}</h1>
          <button onClick={toggleProjectForm} className={styles.editButton}>
            {!showProjectForm ? "Editar Projeto" : "Fechar"}
          </button>

          {!showProjectForm ? (
            <div className={styles.projectDetails}>
              <p className={styles.category}>
                <span>Categoria: </span> {project.category?.name}
              </p>

              <article className={styles.descriptionParagraph}>
                <p className={styles.description}>
                  <span>Descrição:</span> {project.description}
                </p>
              </article>

              <div className={styles.dates}>
                <p className={styles.startDate}>
                  <span className={styles.dateText}>Data de Inicio: </span>
                  {project.startDate}
                </p>
                <p className={styles.lastDate}>
                  <span className={styles.dateText}>Data de Termino: </span>
                  {project.lastDate}
                </p>
              </div>

              <div className={styles.projectTasks}>
                <h2 className={styles.tasksTitle}>Tarefas: </h2>
                {project.tasks?.length ? (
                  <ul className={styles.tasksList}>
                    {project.tasks.map((task) => (
                      <li key={task.id} className={styles.taskName}>
                        {task.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.noTasks}>Sem tarefas para exibir</p>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.projectForm}>
              <ProjectForm
                handleSubmit={editPost}
                btnText="Editar Projeto"
                projectData={project}
              />
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
