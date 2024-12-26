import { BsFillTrashFill } from "react-icons/bs";

interface Tasks {
  name: string;
  id: string;
}

interface ProjectProps {
  id: string;
  name: string;
  category: string;
  handleRemove: (id: string) => void;
  startDate: string;
  lastDate: string;
  tasks: Tasks[]; // Alterado para um array de Tasks
  description: string;
}

export const ProjectCard = ({
  id,
  name,
  description,
  category,
  handleRemove,
  tasks,
  startDate,
  lastDate,
}: ProjectProps) => {
  const remove = (e: any) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className="projectCard">
      <h1 className="ProjectTitle">{name}</h1>
      <div className="details">
        <span className="category">{category}</span>
        <span className="projectid">#{id}</span>
      </div>
      <div className="dates">
        <span className="startDate">{startDate}</span>
        <span className="finishDate">{lastDate}</span>
      </div>
      <p className="description">{description}</p>
      <h3 className="font-semibold">Tarefas:</h3>
      <div className="tasks">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <p className="task" key={task.id}>
              {task.name}
            </p>
          ))
        ) : (
          <p>Não há tarefas!</p>
        )}
      </div>

      <button onClick={remove} className="removeProject">
        <BsFillTrashFill />
      </button>
    </div>
  );
};
