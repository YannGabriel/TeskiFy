import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { Input } from "./input";
import { Select } from "./select";

interface ProjectsProps {
  handleSubmit: any;
}

export const ProjectForm = ({ handleSubmit }: ProjectsProps) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    startDate: "",
    lastDate: "",
    category: { id: "", name: "" },
    tasks: [] as { id: string; name: string }[],
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
      setProject((prevProject) => ({
        ...prevProject,
        tasks: [...prevProject.tasks, newTask],
      }));
      setCurrentTask("");
    }
  };

  const removeTask = (idToRemove: string) => {
    setProject((prevProject) => ({
      ...prevProject,
      tasks: prevProject.tasks.filter((task) => task.id !== idToRemove),
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
    <form onSubmit={submit}>
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
      ></textarea>
      <span>Data de Inicio</span>
      <Input
        type="date"
        placeholder="Data Inicial do Projeto"
        value={project.startDate}
        name="startDate"
        id="DateStart"
        onChange={handleChange}
      />
      <span>Data de Término (prevista)</span>
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

      <div>
        <Input
          name="tasks"
          type="text"
          placeholder="Insira as tarefas"
          id="WorksMetas"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <p></p>

      <span>
        {project.tasks.map((task) => (
          <div key={task.id}>
            <p>{task.name}</p>
            <button onClick={() => removeTask(task.id)}>
              <TiDelete />
            </button>
          </div>
        ))}
      </span>

      <button id="SendProject">
        Criar!
      </button>
    </form>
  );
};
