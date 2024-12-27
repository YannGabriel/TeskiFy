import { Link } from "react-router-dom"
import styles from './header.module.scss'

export const Navbar = () => {
  return(
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/company">Company</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
