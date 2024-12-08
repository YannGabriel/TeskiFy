
import { Link } from "react-router-dom"

export const Navbar = () => {

  return(
    <nav className="navbar">
    <ul className=" hidden md:flex ">
          <li className="target p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="target p-2">
            <Link to="/company">Company</Link>
          </li>
          <li className="target p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="target p-2">
            <Link to="/projects">Projects</Link>
          </li>
      </ul>
      </nav>
  )

}
