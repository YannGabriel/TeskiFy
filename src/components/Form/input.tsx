

// Input configs
interface inputProps {
  type: string;
  name: string
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Adicionando onChange
}

// Input JSX
export const Input = ({ type, placeholder, id, value, onChange, name }: inputProps) => {
  return (
    <input
      type={type}
      name = {name}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange} // evento onchange
      className="border-0 border-b-[1px] border-lightBlue outline-none focus:border-darkBlue :border-b-[2px] block m-auto w-[70%] mt-2"
    />
  );
};

