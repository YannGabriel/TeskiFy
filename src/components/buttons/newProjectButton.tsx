import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  text: string;
}

const test = () => {
  console.log("foi");
};

export const LinkButton = ({ to, text }: ButtonProps) => {
  return (
    <Link
      to={to}
      onClick={test}
      className="bg-darkBlue p-3 m-auto mt-5 block text-center w-[80%] text-white rounded-lg
     lg:m-[0] lg:ml-[5%] lg:mt-[2.5%] text-2xl pointer lg:hover:bg-lightBlue lg:transition-all lg:duration-150 lg:hover:text-black lg:w-[25%]"
    >
      {text}
    </Link>
  );
};
