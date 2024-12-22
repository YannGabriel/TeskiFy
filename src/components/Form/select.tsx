interface SelectProps {
  name: string;
  value:any
  options: { id: string; name: string }[]; // Declaração que as options são um array
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Tipo correto para select
}

export const Select = ({ name, options, onChange, value }: SelectProps) => {
  return (
    <select
      onChange={onChange}
      name={name}
      id={name}
      value={value || ''}
      className="border-0 border-b-[1px] border-lightBlue outline-none focus:border-darkBlue :border-b-[2px] block m-auto w-[70%] mt-6"
    >
      <option value="">Escolha a categoria:</option> {/* Melhor deixar o value vazio */}
      {options.map((option) => (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
