interface inputProps {
  type: string;
  name: string;
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, id, value, onChange, name }: inputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};
