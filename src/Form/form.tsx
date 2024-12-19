// imports
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

// Input configs
interface inputProps {
  type: string;
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Adicionando onChange
}

// Input JSX
export const Input = ({ type, placeholder, id, value, onChange }: inputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange} // evento onchange
      className="border-0 border-b-[1px] border-lightBlue outline-none focus:border-darkBlue :border-b-[2px] block m-auto w-[70%] mt-2"
    />
  );
};

export const ProjectForm = () => {
  const [tasks, setTasks] = useState<{ id: string; name: string }[]>([]); // Agora tasks é um array de objetos com id e nome
  const [currentTask, setCurrentTask] = useState("");

  // Função para adicionar tarefas
  const addTask = (event: React.MouseEvent) => {
    event.preventDefault();

    if (currentTask.trim() !== "") {
      const newTask = { id: Date.now().toString(), name: currentTask }; // Gera um id único
      setTasks((prevTasks) => [...prevTasks, newTask]); // Adiciona a tarefa
      setCurrentTask(""); // Limpa o campo de input
    }
  };

  // Função para remover tarefas
  const removeTask = (idToRemove: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToRemove)); // Filtra a tarefa com o idToRemove
  };

  return (
    <form className="mt-[5%] lg:w-[60%] lg:m-auto lg:mt-[5%] p-[3%]">
      <Input type="text" placeholder="Insira o nome do projeto" />

      <textarea
        name="ProjectInfos"
        id="ProjectInfos"
        placeholder="Descrição do projeto"
        className="w-[70%] border-[1px] border-lightBlue rounded-xl m-auto block p-2 mt-[2.5%] outline-none focus:border-darkBlue"
      ></textarea>

      <span className="InputDetail w-[70%] block m-auto pt-2 text-sm text-darkBlue">
        Data de Inicio
      </span>
      <Input type="date" placeholder="Data de Inicio" id="DateStart" />

      <span className="InputDetail w-[70%] block m-auto pt-5 text-sm text-darkBlue">
        Data de Término (prevista)
      </span>
      <Input type="date" placeholder="Data de Término (prevista)" id="DateFinish" />

      <div className="MetasAdd flex w-[70%] m-auto mt-5">
        <Input
          type="text"
          placeholder="Insira as tarefas"
          id="WorksMetas"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)} // Atualiza o estado ao digitar
        />
        <button onClick={addTask} className=" bg-darkBlue text-white p-2 rounded-lg w-[20%]">Add</button>
      </div>

      <p className="flutuant-space p-5">

      </p>

      <span className="Metas w-[50%]">
        {tasks.map((task) => (
          <div key={task.id} className="TaskItem mb-3 m-auto w-[50%] flex bg-lightBlue  justify-around rounded-lg text-white items-center p-2">
            <p className="text-center flex font-bold w-[80%]">{task.name} 
            </p>
            <button onClick={() => removeTask(task.id)} className="text-2xl">
              <TiDelete />
            </button>
          </div>
        ))}
      </span>

      <button id="SendProject" className="flex m-auto bg-lightBlue text-white p-3 w-[25%] justify-center font-bold rounded-xl text-2xl">
        Criar!
      </button>
    </form>
  );
};
