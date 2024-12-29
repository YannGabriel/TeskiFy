// Imports necessários
import { Navbar } from "./navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import taskLogo from "../../images/taskLogo.svg"
import styles from './header.module.scss';  

export const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <img src={taskLogo} alt="Imagem da logo" className={styles.taskLogo} />

      <Navbar />

      <menu className={`${styles.menuContainer} ${isActive ? styles.menuActive : ''}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/company">Company</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </menu>

      <button
        onClick={() => setActive(!isActive)}
        className={`${styles.menuButton} ${isActive ? styles.active : ''}`}
      >
        {isActive ? <IoMdClose className={styles.icon} /> : <CiMenuBurger className={styles.icon} />}
      </button>
    </header>
  );
}

export default Header;
