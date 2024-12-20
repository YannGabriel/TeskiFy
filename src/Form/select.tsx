
interface SelectProps {
  name: string;
  options: { id: string; name: string }[];//Declaração que minhas options são um array
}

export const Select = ({ name, options }: SelectProps) => {
  return (
    <select
      name={name}
      id={name}
      className="border-0 border-b-[1px] border-lightBlue outline-none focus:border-darkBlue :border-b-[2px] block m-auto w-[70%] mt-6"
    >
      <option>Escolha a categoria:</option>
      {options.map((option) => (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
