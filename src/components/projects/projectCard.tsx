
//import{BsPencil, BsFillTrashFill} from "react-icons/bs"

interface Tasks{
  name: string,
  id:string
}

interface ProjectProps {
  id: string;
  name: string;
  category: string;
  handleRemove: () => void;
  startDate: string;
  lastDate: string;
  tasks: Tasks[];  // Alterado para um array de Tasks
  description: string;
}



export const ProjectCard = ({id, name, description,
   category, handleRemove, tasks,
   startDate, lastDate}: ProjectProps) =>{
  return(
    <div className="projectCard p-5 border-blue-300 border rounded-xl mt-[2.5%] w-[85%] m-auto">
    <h1 className="ProjectTitle font-semibold text-darkBlue text-2xl pb-1">
      {name}
      </h1>
    <div className="details flex gap-3 items-center pb-1">
      <span className="category text-gray-500 text-sm">
        {category}
      </span>
      <span className="projectid text-lightBlue text-xs">
        #{id}
        </span>
    </div>
    <div className="dates flex gap-4 mt-1 mb-1">
      <span className="startDate  bg-green-200  text-center p-1 rounded-md text-green-700">
        {startDate} 
        </span>
      <span className="finishDate  bg-red-200  text-center p-1 rounded-md text-red-700">
        {lastDate}
        </span>
    </div>
    <p className="description w-[90%] pb-1">
      {description}
      </p>
      <h3 className=" font-semibold pb-1.5">Tarefas:</h3>
      <div className="tasks flex gap-4 ">
          {tasks.length > 0 ? (
          tasks.map((task) => (
          <p className=" bg-blue-50 text-darkBlue pr-2 pl-2 pt-1 pb-1 rounded-lg" key={task.id}>{task.name}</p>  // Exibindo o nome de cada tarefa
        ))
        ) : (
          <p>Não há tarefas!</p>
        )}
      </div>
    </div>
  )
}