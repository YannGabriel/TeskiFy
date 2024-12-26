// Imports necessários
import { Navbar } from "./navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

export const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header className="header-container">
      <h1 className="website-name">
        Costs
      </h1>

      <Navbar />

      <menu className={`menu-container ${isActive ? 'menu-active' : 'menu-hidden'}`}>
        <ul className={`menu-list ${isActive ? 'menu-visible' : 'menu-hidden'}`}>
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/company">Company</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="menu-item">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </menu>

      <button
        onClick={() => setActive(!isActive)}
        className={clsx(
          "p-2 rounded-lg transition",
          "md:hidden",
          isActive ? "bg-darkBlue text-white" : "bg-white text-pastelBlue"
        )}
      >
        {isActive ? <IoMdClose /> : <CiMenuBurger />}
      </button>
    </header>
  );
}

export default Header;
