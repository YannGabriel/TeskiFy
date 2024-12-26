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
      className="linkButton"
    >
      {text}
    </Link>
  );
};
