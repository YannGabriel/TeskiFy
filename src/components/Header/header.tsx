
//Imports necessários
import { Navbar } from "./navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";



export const Header = () =>{
  const [isActive, setActive] = useState(false)

  return(
    <header className="container-top bg-black rounded-br-[16px] rounded-bl-[16px] flex w-[100%] content-center align-middle mr-auto
     text-white h-[100px] items-center p-4 justify-between
    ">
      <h1 className="websiteName">
        Costs
      </h1>

      <Navbar/>

        <menu className=" transition-all duration-100 mobileMenu  justify-end md:[display:none]">
        <ul className={`searchList ${isActive ? " transition w-[33.2%] p-6 block absolute top-[85px] left-2/3 transform bg-black text-white rounded-bl-[16px]" 
          : "hidden"}`}>
          <li className="target p-2 pt-4 border-b-[1px] border-b-white mx-auto">
            <Link to="/">Home</Link>
          </li>
          <li className="target p-2 pt-3 border-b-[1px] border-b-white  mx-auto">
            <Link to="/company">Company</Link>
          </li>
          <li className="target p-2 pt-3 border-b-[1px] border-b-white  mx-auto">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="target p-2  pt-3">
            <Link to="/projects">Projects</Link>
          </li>
      </ul>
        </menu>
        <button
      onClick={() => setActive(!isActive)}
      className={clsx(
         "p-2 rounded-lg transition",
         "md:hidden",
      isActive ? " bg-gray-500 text-black" : "bg-white text-black"
      )}
      >
         {isActive ? <IoMdClose  /> : <CiMenuBurger />}
      </button>
    </header>
  );
}

export default Header