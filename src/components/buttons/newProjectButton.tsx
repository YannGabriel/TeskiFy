import { Link } from "react-router-dom";
import styles from "./newProject.module.scss"

interface ButtonProps {
  to: string;
  text: string;
}

export const LinkButton = ({ to, text }: ButtonProps) => {
  return (
    <div className={styles.newButton}>
      <Link
        to={to}
        className="linkButton"
      >
        {text}
      </Link>
    </div>
  );
};
