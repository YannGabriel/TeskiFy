import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./cardProject.module.scss"

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
    <div className={styles.projectCard}>
      <h1 className={styles.projectName}>{name}</h1>
      <div className={styles.projectInfos}>
        <span className={styles.category}>{category}</span>
        <span className={styles.projectID}>#{id}</span>
      </div>
      <div className={styles.dates}>
        <span className={styles.startDate}>{startDate}</span>
        <span className={styles.lastDate}>{lastDate}</span>
      </div>
      <p className={styles.projectDescription}>{description}</p>
      <h3 className={styles.tasksTitle}>Tarefas:</h3>
      <div className={styles.projectTasks}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <p className={styles.task} key={task.id}>
              {task.name}
            </p>
          ))
        ) : (
          <p className={styles.noTasks}>Não há tarefas!</p>
        )}
      </div>

      <div className={styles.buttonsDetails}>
        <button onClick={remove} className={styles.removeProject}>
          <BsFillTrashFill />
        </button>
        <div className={styles.editProject}>
          <Link to={`/project/${id}`}>
          <BsPencil />
          </Link>
        </div>
      </div>
    </div>
  );
};
