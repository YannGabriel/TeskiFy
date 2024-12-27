
import styles from "./select.module.scss"

interface SelectProps {
  name: string;
  value: any;
  options: { id: string; name: string }[]; // Declaração que as options são um array
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Tipo correto para select
}

export const Select = ({ name, options, onChange, value }: SelectProps) => {
  return (
    <select
    className={styles.selectContainer}
      onChange={onChange}
      name={name}
      id={name}
      value={value || ''}
    >
        <option value="" className={styles.optionValueStart}>Escolha a categoria:</option>
        {options.map((option) => (
          <option value={option.id} key={option.id} className={styles.optionValue}>
            {option.name}
          </option>
      ))}
    </select>
  );
};
