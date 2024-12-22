// imports
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { Input } from "./input";
import { Select } from "./select";

interface ProjectsProps {
  handleSubmit: any;
}

export const ProjectForm = ({ handleSubmit }: ProjectsProps) => {
  // Estado do projeto
  const [project, setProject] = useState({
    name: "",
    description: "",
    startDate: "",
    lastDate: "",
    category: { id: "", name: "" },
    tasks: [] as { id: string; name: string }[], // Inicia com um array vazio de tarefas
  });

  const [currentTask, setCurrentTask] = useState("");

  // Função para enviar o formulário
  const submit = (e: any) => {
    e.preventDefault();
    handleSubmit(project); // Passa o projeto completo para o handler
  };

  // Função para atualizar o estado do projeto com base nos inputs
  function handleChange(e: any) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  // Função para atualizar a categoria
  function handleCategory(e: any) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  // Função para adicionar tarefas
  const addTask = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentTask.trim() !== "") {
      const newTask = { id: Date.now().toString(), name: currentTask };
      setProject((prevProject) => ({
        ...prevProject,
        tasks: [...prevProject.tasks, newTask], // Adiciona a nova tarefa ao projeto
      }));
      setCurrentTask(""); // Limpa o campo de input
    }
  };

  // Função para remover tarefas
  const removeTask = (idToRemove: string) => {
    setProject((prevProject) => ({
      ...prevProject,
      tasks: prevProject.tasks.filter((task) => task.id !== idToRemove), // Filtra a tarefa removida
    }));
  };

  // Carregar categorias da API
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
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
    <form onSubmit={submit} className="mt-[5%] lg:w-[60%] lg:m-auto lg:mt-[5%] p-[3%]">
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
        className="w-[70%] border-[1px] border-lightBlue rounded-xl m-auto block p-2 mt-[2.5%] outline-none focus:border-darkBlue"
      ></textarea>
      <span className="InputDetail w-[70%] block m-auto pt-2 text-sm text-darkBlue">Data de Inicio</span>
      <Input
        type="date"
        placeholder="Data Inicial do Projeto"
        value={project.startDate}
        name="startDate"
        id="DateStart"
        onChange={handleChange}
      />
      <span className="InputDetail w-[70%] block m-auto pt-5 text-sm text-darkBlue">Data de Término (prevista)</span>
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

      <div className="MetasAdd flex w-[70%] m-auto mt-5">
        <Input
        name="tasks"
          type="text"
          placeholder="Insira as tarefas"
          id="WorksMetas"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)} // Atualiza o estado da tarefa
        />
        <button onClick={addTask} className="bg-darkBlue text-white p-2 rounded-lg w-[20%]">
          Add
        </button>
      </div>

      <p className="flutuant-space p-5"></p>

      <span className="Metas w-[50%]">
        {project.tasks.map((task) => (
          <div key={task.id} className="TaskItem mb-3 m-auto w-[50%] flex bg-lightBlue justify-around rounded-lg text-white items-center p-2">
            <p className="text-center flex font-bold w-[80%]">{task.name}</p>
            <button onClick={() => removeTask(task.id)} className="text-2xl">
              <TiDelete />
            </button>
          </div>
        ))}
      </span>

      <button
        id="SendProject"
        className="flex m-auto bg-lightBlue text-white p-3 w-[25%] justify-center font-bold rounded-xl text-2xl"
      >
        Criar!
      </button>
    </form>
  );
};
