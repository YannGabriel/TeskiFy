
import { Link } from "react-router-dom"

interface ButtonProps{
  to: string;
  text: string
}

export const LinkButton = ({to, text}: ButtonProps) =>{
  return(
    <Link to={to} className=" bg-darkBlue p-4 m-auto block w-[25%] text-center text-white rounded-lg mt-5
     lg:m-[0] lg:ml-[5%] lg:mt-[2.5%] text-2xl pointer lg:hover:bg-lightBlue lg:transition-all lg:duration-150 lg:hover:text-black ">
    {text}
  </Link>
  )
}