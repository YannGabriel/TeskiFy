import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { Input } from "./fields/Input/input";
import { Select } from "./fields/Select/select";
import styles from "./form.module.scss"

interface ProjectsProps {
  handleSubmit: any;
  projectData?: any
  btnText: string;
}

export const ProjectForm = ({ handleSubmit, projectData, btnText }: ProjectsProps) => {
  const [project, setProject] = useState({
    ...projectData,
    tasks: projectData?.tasks || [],  // Inicializa tasks como um array vazio se não estiver definido
  });

  const [currentTask, setCurrentTask] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e: any) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e: any) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  const addTask = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentTask.trim() !== "") {
      const newTask = { id: Date.now().toString(), name: currentTask };
      setProject((prevProject: any) => ({
        ...prevProject,
        tasks: [...prevProject.tasks, newTask],
      }));
      setCurrentTask("");
    }
  };

  const removeTask = (idToRemove: string) => {
    setProject((prevProject: any) => ({
      ...prevProject,
      tasks: prevProject.tasks.filter((task: any) => task.id !== idToRemove),
    }));
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json"
       },
    })
      .then((info) => info.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Erro ao buscar categorias:", err));
  }, []);

  return (
    <form onSubmit={submit} className={styles.formContent}>
      <Input
        type="text"
        placeholder="Insira o nome do projeto"
        value={project.name}
        name="name"
        onChange={handleChange}
      />
      <textarea
        value={project.description}
        name="description"
        id="ProjectInfos"
        placeholder="Descrição do projeto"
        onChange={handleChange}
        className={styles.descriptionBox}
      ></textarea>
      <span className={styles.datesTexts}>Data de Inicio</span>
      <Input
        type="date"
        placeholder="Data Inicial do Projeto"
        value={project.startDate}
        name="startDate"
        id="DateStart"
        onChange={handleChange}
      />
      <span className={styles.datesTexts}>Data de Término (prevista)</span>
      <Input
        type="date"
        placeholder="Data Final do projeto"
        value={project.lastDate}
        name="lastDate"
        id="DateFinish"
        onChange={handleChange}
      />
      <Select
        value={project.category ? project.category.id : ""}
        name="SelectContainer"
        options={categories}
        onChange={handleCategory}
      />

      <div className={styles.tasksField}>
        <Input
          name="tasks"
          type="text"
          placeholder="Insira as tarefas"
          id="WorksMetas"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button onClick={addTask} className={styles.tasksButton}>Add</button>
      </div>

      <p></p>

      <span className={styles.tasksContainer}>
        {project.tasks.map((task:any) => (
          <div key={task.id} className={styles.tasksViewport}>
            <p className={styles.taskText}>{task.name}</p>
            <button className={styles.deleteButton} onClick={() => removeTask(task.id)}>
              <TiDelete />
            </button>
          </div>
        ))}
      </span>

      <button id="SendProject" className={styles.sendButton}>
        {btnText}
      </button>
    </form>
  );
};
